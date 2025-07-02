export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-max py-8">
        <div className="text-center space-y-4">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary-800 text-sm font-bold">hi</span>
            </div>
            <span className="text-xl font-semibold text-white">hire(idea)</span>
          </div>

          {/* Copyright */}
          <p className="text-white/80 text-sm">
            © 2025 hire(idea) by Vaayu Labs. Built with feedback from 20+ recruiters.
          </p>

          {/* Status */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/60">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Currently in development • Launching soon</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 