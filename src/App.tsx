import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#f3efe6] px-4 py-8">
      <div className="mx-auto w-full max-w-[860px] bg-[#fff9ee] text-black shadow-sm ring-1 ring-black/10">
        {/* Masthead top line */}
        <div className="flex items-center justify-between px-6 pt-4 text-[11px] uppercase tracking-widest">
          <span>Special Edition</span>
          <div className="flex-1 px-4">
            <div className="h-[2px] bg-black" />
            <div className="mt-1 h-[1px] bg-black/70" />
          </div>
          <span>Los Angeles</span>
        </div>

          {/* Main Title */}
          <div className="border-y-2 border-black py-2 my-3">
            <h1 className="leading-none">
              <span className="block font-chomsky text-5xl sm:text-7xl tracking-[0.3em] text-gray-900 mt-1"> CUPID TIMES</span>
            </h1>
          </div>

          <div className="flex justify-center items-center gap-4 sm:gap-8 font-['Arial_Narrow'] text-[10px] sm:text-xs tracking-widest text-gray-700">
            <span>February 14, 2026</span>
            <span className="text-[#c41e3a] font-bold">•</span>
            <span>Special Valentine's Edition</span>
            <span className="text-[#c41e3a] font-bold">•</span>
            <span>Page 1</span>
          </div>


        {/* Horizontal Rule */}
        <hr className="border-0 border-t-2 border-black my-4" />

        {/* Main Headline */}
        <section className="text-center py-6">
          <h2 className="leading-tight mb-4">
            <span className="block font-['Brush_Script_MT',_cursive] text-4xl sm:text-6xl text-[#c41e3a]">Valentine</span>
            <span className="block font-black text-2xl sm:text-4xl tracking-widest uppercase text-gray-900">
              Love Is In The Air Today Across The City
            </span>
          </h2>
          <p className="font-['Arial_Narrow'] text-sm tracking-wide text-gray-600 italic">
            Couples celebrate romance as Cupid spreads joy throughout San Francisco
          </p>
        </section>

        {/* Horizontal Rule with decoration */}
        <div className="flex items-center gap-4 my-4">
          <hr className="flex-1 border-0 border-t border-gray-400" />
          <span className="text-[#c41e3a]">❤</span>
          <hr className="flex-1 border-0 border-t border-gray-400" />
        </div>

        {/* Two Column Content */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 py-6">

          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center">
              <div className="w-full h-52 bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-gray-400 flex items-center justify-center">
                <span className="font-sans text-sm font-bold tracking-wider text-gray-600">📷 Photo</span>
              </div>
              <p className="font-['Arial_Narrow'] text-[10px] text-gray-600 mt-2 italic text-center max-w-[90%]">
                Lovers gather at Golden Gate Bridge for romantic sunset views
              </p>
            </div>

            <p className="text-sm text-justify leading-relaxed text-gray-800 font-['Georgia']">
              As the sun sets over the Bay Area, couples from all walks of life gather at the Golden Gate Bridge to celebrate their love. The iconic landmark has become a symbol of romance this Valentine's Day, with hundreds of pairs taking in the breathtaking views together.
            </p>

            <p className="text-sm text-justify leading-relaxed text-gray-800 font-['Georgia'] indent-6">
              "We come here every year," says local resident Maria Rodriguez, who has been visiting the bridge with her husband for over two decades. "It's our special tradition, and nothing beats the view at sunset."
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-black text-xl sm:text-2xl text-[#c41e3a] tracking-wider text-center">
                ❤️ Love Letters
              </h3>
              <p className="font-['Arial_Narrow'] text-[10px] tracking-widest text-gray-500 uppercase mt-1 mb-4 text-center">
                Messages from the heart
              </p>
            </div>

            <div className="border-l-[3px] border-[#c41e3a] pl-4 space-y-4">
              <div>
                <p className="font-['Georgia'] italic text-xs leading-relaxed text-gray-700 mb-1">
                  "To my dearest, every moment with you is a treasure. You make my heart skip a beat every single day."
                </p>
                <p className="font-['Arial_Narrow'] text-[10px] text-[#c41e3a] text-right font-semibold">— Your Secret Admirer</p>
              </div>

              <hr className="border-0 border-t border-dashed border-gray-300" />

              <div>
                <p className="font-['Georgia'] italic text-xs leading-relaxed text-gray-700 mb-1">
                  "Distance means nothing when someone means everything. I'd cross oceans just to hold your hand."
                </p>
                <p className="font-['Arial_Narrow'] text-[10px] text-[#c41e3a] text-right font-semibold">— Long Distance Love</p>
              </div>

              <hr className="border-0 border-t border-dashed border-gray-300" />

              <div>
                <p className="font-['Georgia'] italic text-xs leading-relaxed text-gray-700 mb-1">
                  "You're the reason I believe in love at first sight. Thank you for being you."
                </p>
                <p className="font-['Arial_Narrow'] text-[10px] text-[#c41e3a] text-right font-semibold">— Forever Yours</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-40 bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-gray-400 flex items-center justify-center">
                <span className="font-sans text-sm font-bold tracking-wider text-gray-600">📷 Photo</span>
              </div>
              <p className="font-['Arial_Narrow'] text-[10px] text-gray-600 mt-2 italic text-center max-w-[90%]">
                Valentine's cards displayed in shop window downtown
              </p>
            </div>
          </div>
        </main>

        {/* Horizontal Rule */}
        <hr className="border-0 border-t-2 border-black my-6" />

        {/* Footer */}
        <footer className="text-center py-4 border-t border-gray-300">
          <p className="font-['Arial_Narrow'] text-[10px] text-gray-600 tracking-wide mb-2">
            © 2026 Cupid Times | Est. 1901 | "Spreading Love Since Day One"
          </p>
          <p className="font-['Arial_Narrow'] text-[9px] text-gray-500 tracking-wide">
            Published Daily at 123 Love Street, San Francisco, CA 94102
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
