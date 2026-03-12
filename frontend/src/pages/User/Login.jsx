import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, setAdminSession } from "../../services/api";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LOCKED_ADMIN_EMAIL = "admin@cloudrule.com";
const SUBADMIN_EMAIL = "subadmincloud@gmail.com";

const UserLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    try {
      const normalizedEmail = form.email.toLowerCase();
      if (![LOCKED_ADMIN_EMAIL, SUBADMIN_EMAIL].includes(normalizedEmail)) {
        throw new Error("Only admin or subadmin accounts can login here");
      }

      const adminResult = await api.login({
        email: normalizedEmail,
        password: form.password,
      });
      setAdminSession(adminResult.token, adminResult.admin);
      navigate("/admin/dashboard", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 py-8 pb-32 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="w-full max-w-[420px] sm:max-w-md md:max-w-xl lg:max-w-2xl flex flex-col mt-10 md:mt-0 relative z-10">
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="w-full p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-white">
            Login
          </h1>
          <p className="text-white/80 mb-6 sm:mb-8 text-sm lg:text-base">
            Login for Admin or Subadmin.
          </p>

          <label className="text-sm text-white/80 block">Email</label>
          <input
            name="email"
            type="email"
            required
            // placeholder="admin@cloudrule.com"
            value={form.email}
            onChange={handleChange}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            className="w-full mt-1 mb-4 px-4 py-3 rounded-lg bg-black/60 border border-white/20 outline-none text-sm sm:text-base text-white placeholder:text-white/50 focus:border-white/50 transition-colors"
          />

          <label className="text-sm text-white/80 block">Password</label>
          <div className="relative w-full mt-1 mb-4">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              // placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
              className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/20 outline-none text-sm sm:text-base text-white placeholder:text-white/50 focus:border-white/50 transition-colors pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>

          {error ? <p className="text-red-400 text-sm mb-3">{error}</p> : null}
          {message ? <p className="text-green-400 text-sm mb-3">{message}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-white text-black font-bold disabled:opacity-70 text-sm sm:text-base hover:bg-white/90 transition-colors"
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          <p className="text-sm sm:text-base text-white/90 mt-5 text-center font-medium">
            Need subadmin access?{" "}
            <Link to="/register" className="underline text-white font-extrabold hover:text-white/80 transition-colors">
              Register Subadmin
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default UserLogin;
