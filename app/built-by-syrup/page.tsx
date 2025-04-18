'use client';

import Link from 'next/link';

export default function BuiltBySyrup() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-20">
            <h1 className="text-5xl font-light tracking-tighter text-white mb-6">
              Legal Information
            </h1>
            <p className="text-white/60 text-lg">
              This website and all its contents are the intellectual property of Syrup.dev
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-light text-white mb-6">Website Purpose</h2>
              <p className="text-white/60 leading-relaxed">
                This is a demonstration website created by Syrup.dev to showcase our design and development capabilities. 
                It is not a live product, active service, or functioning business. This website exists solely as a preview 
                or staging environment for client review and internal demonstration purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-6">Ownership & Rights</h2>
              <p className="text-white/60 leading-relaxed">
                This website was designed and developed by Syrup.dev. All intellectual property rights — including code, 
                design, layout, and content — remain the sole property of Syrup.dev unless otherwise transferred through 
                a signed agreement and upon receipt of full payment. No part of this website may be considered owned or 
                licensed for use by any third party without written confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-6">Usage Restrictions</h2>
              <p className="text-white/60 leading-relaxed">
                This website is not intended for commercial use or public distribution. Any unauthorized use, duplication, 
                or modification of its content, design, or code is strictly prohibited and may result in legal action. 
                It is intended solely for private demonstration purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-6">Image Usage</h2>
              <div className="text-white/60 leading-relaxed">
                <p className="mb-4">
                  All images used on this website fall under one of the following categories:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Licensed stock used for demonstration purposes only</li>
                  <li>Owned by their respective copyright holders</li>
                  <li>Placeholder content to be replaced by client-provided media</li>
                </ul>
                <p>
                  Syrup.dev does not claim ownership of third-party images and does not grant rights to reuse or redistribute them. 
                  No commercial use of these images is permitted without proper licensing or authorization.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-6">Copyright Notice</h2>
              <p className="text-white/60 leading-relaxed">
                © 2025 Syrup.dev. All rights reserved.
                <br />
                This website and all associated content are protected under international copyright laws and intellectual 
                property treaties. Unauthorized reproduction, distribution, or adaptation of any part of this website is 
                strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-white mb-6">Contact</h2>
              <p className="text-white/60 leading-relaxed">
                For any questions regarding this website or requests for permission to use its contents, please contact:
                <br />
                <a 
                  href="mailto:legal@syrup.dev" 
                  className="text-white hover:text-white/80 transition-colors"
                >
                  legal@syrup.dev
                </a>
              </p>
            </section>
          </div>

          <div className="mt-32 pt-8 border-t border-white/10">
            <Link 
              href="/" 
              className="text-white/60 hover:text-white transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 