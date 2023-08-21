import React from "react";

const FooterSection: React.FC = () => {
  return (
    <section>
      <div className="sm:container sm:m-auto pb-10 pt-20 mx-6">
        <div className="grid grid-cols-footer">
          <div className="col-start-1 col-end-6 md:col-start-auto md:col-end-auto">
            <h1>Powered by Bunzz and celo</h1>
            <img
              className="mb-11 md:mb-0"
              src="/static/media/remix-logo.492b26c57aa2522a31e26f9f83e1c973.svg"
              alt="logo"
            />
          </div>
          <div className="mb-11 md:mb-0">
            <h6 className="text-gray font-sfProRegular text-xs pb-4">
              PRODUCT
            </h6>
            <div className="inline-flex flex-col gap-3">
              <a
                className="font-sfProRegular text-black text-sm block hover:underline"
                href="https://remix.ethereum.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Remix Online IDE
              </a>
              <a
                className="font-sfProRegular text-black text-sm block hover:underline"
                href="https://github.com/ethereum/remix-desktop/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                Remix Desktop IDE
              </a>
              {/* Other product links */}
            </div>
          </div>
          <div className="col-start-3 col-end-6 md:col-start-auto md:col-end-auto">
            <h6 className="text-gray font-sfProRegular text-xs pb-4">
              DOCUMENTATION
            </h6>
            <div className="inline-flex flex-col gap-3">
              <a
                className="font-sfProRegular text-black text-sm block hover:underline"
                href="https://docs.soliditylang.org/en/v0.6.1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solidity
              </a>
              <a
                className="font-sfProRegular text-black text-sm block hover:underline"
                href="https://remix-ide.readthedocs.io/en/latest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Remix
              </a>
              {/* Other documentation links */}
            </div>
          </div>
          <div>
            {/* GitHub and social media links */}
            <a
              className="font-sfProRegular text-black text-sm block hover:underline"
              href="https://remix-ide.readthedocs.io/en/latest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Remix
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-borderColor py-6 flex justify-center">
        <p className="font-sfProRegular text-black text-xs pr-5">
          © 2022 Remix. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
