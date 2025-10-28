import Image from "next/image";
import React from "react";
import { REPO_LINK } from "src/shared";
import ExternalLink from "./ExternalLink";
import SocialIcon from "./SocialIcon";

const Footer: React.FC = () => {
    const imgPath = "https://ajayliu.com/img";
    return (
        <footer className="bg-gray-900 border-t border-gray-200 mt-24">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-white">
                            Notation Visualizer
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Professional mathematical notation services for educational institutions and enterprise clients.
                        </p>
                    </div>

                    {/* GitHub Contribution */}
                    <div className="flex justify-center">
                        <ExternalLink href={REPO_LINK}>
                            <div className="flex items-center space-x-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 rounded-xl transition-all duration-300 group">
                                <Image
                                    src={`${imgPath}/repo.svg`}
                                    width={24}
                                    height={24}
                                    alt="GitHub Repository"
                                    className="group-hover:scale-110 transition-transform duration-300"
                                />
                                <span className="text-sm font-medium text-white">Open Source Project</span>
                            </div>
                        </ExternalLink>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-end space-x-4">
                        <SocialIcon
                            href="https://ajayliu.com"
                            img={{
                                src: `${imgPath}/web_icon.svg`,
                                alt: "Ajay Liu Website",
                            }}
                        />
                        <SocialIcon
                            href="https://github.com/AjayLiu"
                            img={{
                                src: `${imgPath}/github.svg`,
                                alt: "Github logo",
                            }}
                        />
                        <SocialIcon
                            href="https://www.linkedin.com/in/ajayliu/"
                            img={{
                                src: `${imgPath}/linkedin.svg`,
                                alt: "LinkedIn logo",
                            }}
                        />
                        <SocialIcon
                            href="https://www.youtube.com/channel/UCompAYRB224zqCPDyexvmng"
                            img={{
                                src: `${imgPath}/youtube.svg`,
                                alt: "Youtube logo",
                            }}
                        />
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()}{" "}
                    <ExternalLink href="https://ajayliu.com">
                        <span className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Ajay Liu</span>
                    </ExternalLink>
                    . All Rights Reserved •{" "}
                    <ExternalLink href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@ajayliu.com">
                        <span className="text-blue-400 hover:text-blue-300 transition-colors duration-200">contact@ajayliu.com</span>
                    </ExternalLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
