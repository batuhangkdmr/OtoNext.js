export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative inline-flex">
          <div className="w-20 h-20 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              className="w-8 h-8 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-gray-600 font-semibold animate-pulse">
          Yükleniyor...
        </p>
        <p className="mt-2 text-sm text-gray-400">
          Yönel Oto Yedek Parça
        </p>
      </div>
    </div>
  );
}

