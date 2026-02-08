const ServiceCard = ({ title, caption, index }) => {
  return (
    <div
      className="
        service-card group
        relative h-full
        transition-all duration-500 ease-out
        hover:-translate-y-3
        hover:scale-[1.02]
      "
      style={{
        animation: "fadeInUp 0.6s ease-out forwards",
        animationDelay: `${index * 100}ms`,
        opacity: 0,
      }}
    >
      {/* Main card */}
      <div
        className="
          relative h-full min-h-[280px] md:min-h-[300px]
          bg-black
          border border-white/10
          rounded-3xl
          p-6 md:p-8
          overflow-hidden
          transition-all duration-500
          hover:border-white/30
          hover:bg-[#0a0a0a]
          hover:shadow-[0_20px_80px_rgba(0,0,0,0.9),0_0_80px_rgba(255,255,255,0.1)]
        "
      >
        {/* Gradient overlay */}
        <div
          className="
            absolute inset-0 opacity-0 group-hover:opacity-100
            bg-gradient-to-br from-white/[0.05] via-transparent to-transparent
            transition-opacity duration-700
            pointer-events-none
          "
        />

        {/* Shimmer */}
        <div
          className="
            absolute inset-0 opacity-0 group-hover:opacity-100
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            -translate-x-full group-hover:translate-x-full
            transition-all duration-1000
            pointer-events-none
          "
        />

        {/* Header */}
        <div className="relative z-10 mb-6">
          <div className="flex items-start justify-between">
            {/* Icon */}
            <div
              className="
                w-14 h-14 md:w-16 md:h-16 rounded-2xl
                bg-white/5 border border-white/10
                flex items-center justify-center
                transition-all duration-500
                group-hover:scale-110 group-hover:rotate-12
                group-hover:border-white/30
                group-hover:bg-white/10
              "
            >
              <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
            </div>

            {/* Arrow */}
            <div
              className="
                opacity-0 group-hover:opacity-100
                translate-x-4 translate-y-4
                group-hover:translate-x-0 group-hover:translate-y-0
                transition-all duration-500
                p-2 rounded-xl bg-white/5 border border-white/10
              "
            >
              <svg
                className="w-5 h-5 text-white/60 group-hover:text-white transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </div>
          </div>

          {/* Index */}
          <div
            className="
              absolute -top-3 -left-3
              text-8xl font-black
              text-white/[0.10] group-hover:text-white/[0.20]
              transition-all duration-700
              select-none
            "
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>

          <div className="h-[2px] w-12 bg-gradient-to-r from-white/50 to-transparent transition-all group-hover:w-20" />

          <p className="text-white/50 group-hover:text-white/70 transition">
            {caption}
          </p>

          <div
            className="
              pt-2 opacity-0 group-hover:opacity-100
              translate-y-2 group-hover:translate-y-0
              transition-all duration-500
            "
          >
            <span className="text-sm text-white/60 hover:text-white cursor-pointer">
              Learn more →
            </span>
          </div>
        </div>

        {/* Bottom glow */}
        <div
          className="
            absolute bottom-0 left-0 right-0 h-[2px]
            bg-gradient-to-r from-transparent via-white/40 to-transparent
            scale-x-0 group-hover:scale-x-100
            transition-transform duration-700
          "
        />
      </div>

      {/* Outer glow */}
      <div
        className="
          absolute inset-0 -z-10
          bg-white/[0.03]
          rounded-3xl blur-2xl
          opacity-0 group-hover:opacity-100
          transition-all duration-700
        "
      />

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
