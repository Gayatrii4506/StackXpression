import React, { useState, useCallback, useEffect, useRef } from 'react';
import Tree from 'react-d3-tree';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import { useCenteredTree } from './useCenteredTree';
import 'react-d3-tree/lib/styles.css';

// Custom type for tree node
type TreeNodeType = {
  name: string;
  attributes?: Record<string, any>;
  children?: TreeNodeType[];
  val?: string;
  isOperator?: boolean;
};

interface TreeNode {
  val: string;
  isOperator: boolean;
  left?: TreeNode;
  right?: TreeNode;
  raw?: any;
}

interface TreeVisualizerProps {
  initialExpression: string;
}

const TreeVisualizer: React.FC<TreeVisualizerProps> = ({ initialExpression }) => {
  const operators = new Set(['+', '-', '*', '/', '^']);
  const [treeData, setTreeData] = useState<any>({ name: "" });
  const [dimensions, translate, containerRef] = useCenteredTree({ x: 0, y: 0 });
  const [expression, setExpression] = useState(initialExpression);
  const [inputExpression, setInputExpression] = useState(initialExpression);
  const [isAnimating, setIsAnimating] = useState(false);
  const [traversalResult, setTraversalResult] = useState<string>("");
  const [animationSpeed, setAnimationSpeed] = useState<number>(0.5);
  const nodeSize = { x: 150, y: 100 };

  const buildExpressionTree = (exp: string): TreeNodeType | null => {
    try {
      const terms = exp.trim().split(/\s+/).filter(term => term !== '');
      if (terms.length === 0) return null;
      
      const stack: TreeNodeType[] = [];

      for (const t of terms) {
      if (!operators.has(t)) {
        stack.push({
          val: t,
          isOperator: false,
        });
      } else {
        if (stack.length < 2) {
          throw new Error("Invalid postfix expression: Not enough operands for operator");
        }
        const right = stack.pop()!;
        const left = stack.pop()!;
        stack.push({
          val: t,
          isOperator: true,
          left,
          right,
        });
      }
    });

    if (stack.length !== 1) {
      Swal.fire({
        title: "Invalid Expression!",
        text: "Please check your postfix expression",
        icon: "error",
        confirmButtonColor: "#10B981",
      });
      return null;
    }

    return stack[0];
  };

  const convertToD3Format = (node: TreeNode): any => {
    if (!node) return null;
    
    return {
      name: node.val,
      attributes: {
        type: node.isOperator ? 'operator' : 'operand'
      },
      children: [
        node.left && convertToD3Format(node.left),
        node.right && convertToD3Format(node.right),
      ].filter(Boolean),
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const root = buildExpressionTree(expression);
    if (root) {
      const d3Tree = convertToD3Format(root);
      setTreeData(d3Tree);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const renderNode = ({ nodeDatum, toggleNode }: any) => (
    <motion.g 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <circle
        r={nodeSize.x / 6}
        fill={
          nodeDatum.attributes?.type === 'operator' 
            ? '#10B981' 
            : '#3B82F6'
        }
        stroke="#fff"
        strokeWidth={2}
      />
      <text
        fill="white"
        stroke="none"
        fontSize="14"
        fontWeight="bold"
        x={0}
        y={5}
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}
      >
        {nodeDatum.name}
      </text>
    </motion.g>
  );

  const handleVisualize = () => {
    try {
      setExpression(inputExpression);
      buildTree();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error instanceof Error ? error.message : "An error occurred while building the tree",
        icon: "error",
        confirmButtonColor: "#10B981",
      });
    }
  };

  const handleTraversal = (type: 'preorder' | 'inorder' | 'postorder') => {
    const result: string[] = [];
    
    const traverse = (node: any, type: string) => {
      if (!node) return;
      
      if (type === 'preorder') result.push(node.name);
      if (node.children?.[0]) traverse(node.children[0], type);
      if (type === 'inorder') result.push(node.name);
      if (node.children?.[1]) traverse(node.children[1], type);
      if (type === 'postorder') result.push(node.name);
    };
    
    traverse(treeData, type);
    setTraversalResult(result.join(' to '));
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnimationSpeed(parseFloat(e.target.value));
  };

  const convertToD3Format = (node: TreeNodeType): any => {
    if (!node) return { name: '' };
    
    const d3Node: any = {
      name: node.val || '',
      attributes: {
        isOperator: node.isOperator || false
      }
    };

    if (node.children && node.children.length > 0) {
      d3Node.children = [];
      node.children.forEach(child => {
        if (child) {
          d3Node.children.push(convertToD3Format(child));
        }
      });
    }

    return d3Node;
  };

  const buildTree = useCallback(() => {
    const root = buildExpressionTree(expression);
    if (root) {
      const d3Tree = convertToD3Format(root);
      setTreeData(d3Tree);
    } else {
      setTreeData({ name: '' });
    }
  }, [expression]);

  // Initialize with the default expression
  useEffect(() => {
    setInputExpression(initialExpression);
    setExpression(initialExpression);
  }, [initialExpression]);

  // Rebuild tree when expression changes
  useEffect(() => {
    buildTree();
  }, [expression, buildTree]);

  return (
    <div className="w-full h-full flex flex-col space-y-6 p-4">
      {/* Expression Input */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="expression" className="text-sm font-medium text-gray-700">
          Enter Postfix Expression
        </label>
        <div className="flex space-x-2">
          <input
            id="expression"
            type="text"
            value={inputExpression}
            onChange={(e) => setInputExpression(e.target.value)}
            placeholder="e.g., 8 2 3 * - 7 +"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button
            onClick={handleVisualize}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Visualize
          </button>
        </div>
      </div>

      {/* Tree Visualization */}
      <div className="flex-1 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
        <div ref={containerRef} className="w-full h-full">
          {treeData && treeData.name !== "" ? (
            <Tree
              data={treeData}
              translate={translate}
              dimensions={dimensions}
              nodeSize={nodeSize}
              renderCustomNodeElement={renderNode}
              pathClassFunc={() => 'tree-link'}
              orientation="vertical"
              separation={{ siblings: 1.5, nonSiblings: 2 }}
              transitionDuration={300 / animationSpeed}
              zoomable={true}
              initialDepth={1}
              zoom={0.8}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Enter a valid postfix expression and click Visualize
            </div>
          )}
        </div>
      </div>

      {/* Traversal Controls */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Tree Traversals</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <button 
            onClick={() => handleTraversal('preorder')}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
            Preorder
          </button>
          <button 
            onClick={() => handleTraversal('inorder')}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            Inorder
          </button>
          <button 
            onClick={() => handleTraversal('postorder')}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Postorder
          </button>
        </div>

        {/* Result Display */}
        <div className="p-3 bg-white rounded-md border border-gray-200">
          <div className="flex items-center">
            <span className="font-medium text-gray-700 mr-2">Traversal Result:</span>
            <div className="flex-1 bg-gray-50 px-3 py-2 rounded border border-gray-200 font-mono text-sm">
              {traversalResult || '[ ]'}
            </div>
          </div>
        </div>

        {/* Speed Control */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Animation Speed</span>
            <span className="text-xs text-gray-500">Slow to Fast</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={animationSpeed}
            onChange={handleSpeedChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Enter postfix expression (e.g., 8 2 3 * - 7 +)"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          Visualize
        </button>
      </form>

      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div 
          ref={containerRef} 
          className="w-full h-full min-h-[500px] relative"
        >
          {treeData.name && (
            <Tree
              data={treeData}
              translate={translate}
              dimensions={dimensions}
              nodeSize={nodeSize}
              renderCustomNodeElement={renderNode}
              pathClassFunc={() => 'tree-link'}
              orientation="vertical"
              separation={{ siblings: 1.5, nonSiblings: 2 }}
              transitionDuration={300}
              zoomable={true}
              initialDepth={1}
              zoom={0.8}
            />
          )}
        </div>
      </div>

      <style jsx global>{`
        .tree-link {
          stroke: #D1D5DB;
          stroke-width: 2;
          fill: none;
        }
        .rd3t-node {
          cursor: default;
        }
      `}</style>
    </div>
  );
};

export default TreeVisualizer;
