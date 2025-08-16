import React from "react";
import {
  ArrowLeft,
  Home,
  AlertTriangle,
  WifiOff,
  FileX,
  Code,
} from "lucide-react";

const NotFoundPage: React.FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Enhanced dark background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-950/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gray-800/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-900/10 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute top-1/6 right-1/3 w-40 h-40 bg-gray-700/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 text-white mb-4">
            <div className="p-3 bg-gradient-to-br from-red-600 to-red-800 rounded-xl shadow-lg">
              <Code className="w-8 h-8 text-white" />
            </div>
            <span className="text-4xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Dvnux
            </span>
          </div>
        </div>

        {/* Professional error display */}
        <div className="mb-8 relative">
          <div className="inline-flex items-center gap-4 mb-6">
            <AlertTriangle className="w-12 h-12 text-red-500 animate-pulse" />
            <span className="text-6xl md:text-8xl font-bold text-red-500 font-mono tracking-wider">
              404
            </span>
            <WifiOff className="w-12 h-12 text-red-500 animate-pulse delay-300" />
          </div>

          {/* Error code display */}
          <div className="bg-gray-900/80 border border-red-500/30 rounded-lg p-6 mb-6 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-3">
              <FileX className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-mono text-lg">
                HTTP_STATUS_NOT_FOUND
              </span>
            </div>
            <div className="text-gray-400 font-mono text-sm">
              <span className="text-red-400">Error:</span> The requested
              resource could not be located on this server.
            </div>
          </div>
        </div>

        {/* Professional error message */}
        <div className="mb-12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resource Not Found
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            The page you are trying to access is currently unavailable. This
            could be due to a
            <span className="text-red-400 font-medium"> broken link</span>,
            <span className="text-red-400 font-medium"> moved content</span>, or
            <span className="text-red-400 font-medium">
              {" "}
              server configuration
            </span>{" "}
            issues.
          </p>

          {/* Technical details */}
          <div className="bg-black/50 border border-gray-800 rounded-lg p-4 text-left max-w-md mx-auto">
            <div className="text-gray-500 text-sm font-mono space-y-1">
              <div>
                <span className="text-red-400">Status:</span> 404 Not Found
              </div>
              <div>
                <span className="text-red-400">Server:</span> Dvnux/2.0
              </div>
              <div>
                <span className="text-red-400">Timestamp:</span>{" "}
                {new Date().toISOString()}
              </div>
            </div>
          </div>
        </div>

        {/* Professional buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={handleGoBack}
            className="group relative px-10 py-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 hover:scale-105 hover:shadow-xl hover:shadow-black/50 border border-gray-600/50 hover:border-gray-500 min-w-[180px]">
            <div className="flex items-center justify-center gap-3">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Go Back
            </div>
          </button>

          <button
            onClick={handleGoHome}
            className="group relative px-10 py-4 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:from-red-500 hover:via-red-600 hover:to-red-500 hover:scale-105 hover:shadow-xl hover:shadow-red-900/50 min-w-[180px]">
            <div className="flex items-center justify-center gap-3">
              <Home className="w-5 h-5 transition-transform group-hover:scale-110" />
              Return Home
            </div>
          </button>
        </div>

        {/* Professional footer */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span>System Status: Operational</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <div>Support: support@dvnux.com</div>
            <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <div>Documentation Available</div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Red error indicators */}
        <div className="absolute top-1/5 left-1/5 w-3 h-3 bg-red-500 rounded-full animate-ping delay-0"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-red-500/70 rounded-full animate-ping delay-1200"></div>
        <div className="absolute bottom-1/5 right-1/6 w-2 h-2 bg-red-300 rounded-full animate-ping delay-1800"></div>

        {/* Gray accent dots */}
        <div className="absolute top-2/5 left-1/6 w-1 h-1 bg-gray-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-2/5 right-1/5 w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-900"></div>
      </div>
    </div>
  );
};

export default NotFoundPage;
