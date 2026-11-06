import React, { useState } from 'react';
import { 
  FolderDown, 
  Smartphone, 
  ChevronUp, 
  ChevronDown,
  PlayCircle, 
  Link2, 
  Film, 
  WifiOff, 
  Sparkles,
  ArrowDown,
  CheckCircle2,
  SlidersHorizontal,
  Layers
} from 'lucide-react';

export const InstallStepsTimeline: React.FC = () => {
  const [isFaqOpen, setIsFaqOpen] = useState(true);

  const downloadFlow = [
    {
      step: '১',
      title: 'ভিডিও লিংক কপি করুন (Copy Link)',
      desc: "Facebook, YouTube, TikTok, Movie সাইট বা যেকোনো সোশ্যাল মিডিয়া ভিডিওর 'Share' অপশন থেকে 'Copy Link' করুন।",
      icon: Link2,
      badgeColor: 'bg-red-50 text-red-600 border-red-200/80',
      tag: '🔗 https://video.link/share',
      tagColor: 'bg-red-50 text-red-700 border-red-100',
    },
    {
      step: '২',
      title: 'VidMax অ্যাপে পেস্ট বা অটো-ডিটেক্ট',
      desc: 'VidMax অ্যাপ খুললেই লিংকটি নিজে থেকেই স্ক্যান হয়ে যাবে, অথবা সার্চ বারে এসে লিংকটি পেস্ট করে সার্চ দিন।',
      icon: Smartphone,
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-200/80',
      tag: '📋 Auto-Detecting Video...',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-100',
    },
    {
      step: '৩',
      title: 'কোয়ালিটি পছন্দ করুন (Choose Quality)',
      desc: 'আপনার পছন্দের রেজোলিউশন (4K, 1080p, 720p বা MP3 গান) এবং No Watermark অপশন সিলেক্ট করুন।',
      icon: SlidersHorizontal,
      badgeColor: 'bg-amber-50 text-amber-600 border-amber-200/80',
      tag: '⚡ 4K / 1080p / MP3 (No Watermark)',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-100',
    },
    {
      step: '৪',
      title: 'সরাসরি ফোনের গ্যালারিতে সেভ!',
      desc: "'Download' এ চাপ দিলে সেকেন্ডে কোনো ইন্টারনেট ঝামেলা ছাড়াই ভিডিওটি সরাসরি ফোনের গ্যালারি (Gallery) তে সেভ হয়ে যাবে।",
      icon: CheckCircle2,
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
      tag: '✓ Saved in Gallery / DCIM (Offline)',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
  ];

  return (
    <div className="w-full space-y-4 my-4 text-left">
      {/* 1. Link to Gallery Download Structure Diagram (স্ট্রাকচার: কিভাবে লিংক থেকে সরাসরি গ্যালারিতে ডাউনলোড হয়) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-gray-100/90 space-y-4">
        {/* Structure Header */}
        <div className="flex items-center space-x-2.5 border-b border-gray-100 pb-3.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-500 to-rose-400 text-white flex items-center justify-center shrink-0 shadow-2xs">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-gray-900 text-sm sm:text-base leading-tight">
              লিংক থেকে সরাসরি গ্যালারিতে ভিডিও ডাউনলোডের স্ট্রাকচার
            </h3>
            <p className="text-[11px] text-gray-500 mt-0.5">
              মাত্র ৪টি সহজ ধাপে ভিডিও সরাসরি আপনার ফোনের গ্যালারি ও মেমোরিতে সেভ হয়
            </p>
          </div>
        </div>

        {/* Visual Step-by-Step Flow */}
        <div className="space-y-2 relative">
          {downloadFlow.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === downloadFlow.length - 1;

            return (
              <React.Fragment key={index}>
                <div className="p-3 sm:p-3.5 rounded-2xl bg-gray-50/70 border border-gray-100/90 hover:bg-white hover:shadow-xs transition-all flex items-start space-x-3">
                  <div className={`w-9 h-9 rounded-xl ${item.badgeColor} border flex items-center justify-center shrink-0 shadow-2xs font-black text-xs`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 flex-wrap">
                      <h4 className="font-bold text-gray-900 text-xs sm:text-[13px]">
                        ধাপ {item.step}: {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-[11px] sm:text-xs leading-relaxed mt-0.5 font-normal">
                      {item.desc}
                    </p>
                    <div className="mt-1.5">
                      <span className={`inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold border ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Animated Arrow Connector */}
                {!isLast && (
                  <div className="flex justify-center py-0.5">
                    <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
                      <ArrowDown className="w-3.5 h-3.5 animate-bounce stroke-[2.5]" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* 2. Security Warning Explanation Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-gray-100/90">
        <button
          type="button"
          onClick={() => setIsFaqOpen(!isFaqOpen)}
          className="w-full flex items-center justify-between text-left cursor-pointer group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/60 font-bold">
              <span className="text-base font-serif leading-none">!</span>
            </div>
            <h4 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-amber-700 transition-colors">
              এই সতর্কতা কেন দেখায়?
            </h4>
          </div>
          <div className="text-gray-400 group-hover:text-gray-600 transition-colors p-1">
            {isFaqOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </button>

        {isFaqOpen && (
          <div className="mt-3 pt-1 space-y-3 animate-in fade-in duration-200">
            <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
              Google Play-এর বাইরে থেকে APK এলে Android অজানা উৎসের সতর্কতা দেখায়। ডাউনলোডের উৎস যাচাই করুন।
            </p>

            <div className="bg-gray-50/90 rounded-2xl p-3.5 border border-gray-100 text-xs sm:text-[12.5px] text-gray-600 leading-relaxed">
              দ্রুত হালনাগাদের জন্য VidMax APK সরাসরি অফিশিয়াল মাধ্যমে দেওয়া হয়; এতে সতর্কতা দেখা যেতে পারে।
            </div>
          </div>
        )}
      </div>

      {/* 3. App Usage Guide Card (ব্যবহার করার নিয়ম ও ভিডিও ডাউনলোড করে গ্যালারিতে সেভ রাখার নিয়ম) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-gray-100/90 space-y-3.5">
        <h4 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2 border-b border-gray-100 pb-2">
          <PlayCircle className="w-5 h-5 text-red-500" />
          VidMax অ্যাপ ব্যবহার করার নিয়ম
        </h4>

        {/* Intro banner */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100/80 rounded-2xl p-3 text-xs sm:text-[13px] flex items-center space-x-2.5">
          <span className="w-6 h-6 rounded-lg bg-red-500 text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-2xs">
            ★
          </span>
          <p className="font-semibold text-gray-800 leading-snug">
            এটা একটা ভিডিও ডাউনলোড প্ল্যাটফর্ম। সরাসরি গ্যালারিতে ভিডিও ডাউনলোড হয়।
          </p>
        </div>

        <div className="space-y-2.5 text-xs sm:text-[13px]">
          {/* Item 1 */}
          <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-2xl bg-gray-50/80 border border-gray-100">
            <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
              <Link2 className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-gray-900">১. যে কোন লিংক এর মাধ্যমে :</p>
              <p className="text-gray-600 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                Movie, Cinema, Facebook, TikTok বা YouTube, all social medium ভিডিওর 'Share Link' থেকে 'Copy Link' করে VidMax অ্যাপে পেস্ট করুন ভিডিও ডাউনলোড করা যায়।
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-2xl bg-gray-50/80 border border-gray-100">
            <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-gray-900">২. ভাইরাল মুভি ও সিনেমা কালেকশন :</p>
              <p className="text-gray-600 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                এখান থেকে ভাইরাল মুভি Hollywood, Bollywood, Horror, Drama, Action মুভি গুলা ডাউনলোড করতে পারবা।
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-2xl bg-gray-50/80 border border-gray-100">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
              <WifiOff className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-gray-900">৩. অফলাইনেও চলবে :</p>
              <p className="text-gray-600 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                কোন কিছু ডাউনলোড করলে সেটা অফলাইনেও চলবে।
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-2xl bg-gray-50/80 border border-gray-100">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
              <FolderDown className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-gray-900">৪. সরাসরি গ্যালারিতে সেভ :</p>
              <p className="text-gray-600 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                সরাসরি ভিডিও গ্যালারিতে নামে যাবে।
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex items-start space-x-2.5 p-2.5 sm:p-3 rounded-2xl bg-gray-50/80 border border-gray-100">
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-gray-900">৫. অনলাইন সকল সুবিধা ও সার্ভিস :</p>
              <p className="text-gray-600 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                এইখান থেকে আপনি যে কোন সুবিধা পাবেন অনলাইনে যে কোন সার্ভিস এখান থেকে পাবেন।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
