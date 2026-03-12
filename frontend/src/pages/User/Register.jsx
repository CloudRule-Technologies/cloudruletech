import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { FiEye, FiEyeOff } from "react-icons/fi";

const UserRegister = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const result = await api.register({
        name: form.name,
        email: form.email,
        password: form.password,
      });
      setMessage(result.message || "Subadmin registered successfully");
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
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
            Subadmin Register
          </h1>
          <p className="text-white/80 mb-6 sm:mb-8 text-sm lg:text-base">
            Create or reset the fixed subadmin account.
          </p>

          <label className="text-sm text-white/80 block">Name</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            autoComplete="off"
            autoCapitalize="words"
            autoCorrect="off"
            spellCheck={false}
            className="w-full mt-1 mb-4 px-4 py-3 rounded-lg bg-black/60 border border-white/20 outline-none text-sm sm:text-base text-white placeholder:text-white/50 focus:border-white/50 transition-colors"
          />

          <label className="text-sm text-white/80 block">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            autoComplete="off"
            className="w-full mt-1 mb-4 px-4 py-3 rounded-lg bg-black/60 border border-white/20 outline-none text-sm sm:text-base text-white placeholder:text-white/50 focus:border-white/50 transition-colors"
          />

          <label className="text-sm text-white/80 block">Password</label>
          <div className="relative w-full mt-1 mb-4">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              minLength={6}
              placeholder="Min. 6 characters"
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

          <label className="text-sm text-white/80 block">Confirm Password</label>
          <div className="relative w-full mt-1 mb-4">
            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              required
              minLength={6}
              placeholder="Repeat password"
              value={form.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/20 outline-none text-sm sm:text-base text-white placeholder:text-white/50 focus:border-white/50 transition-colors pr-12"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
            >
              {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>

          {error ? <p className="text-red-400 text-sm mb-3">{error}</p> : null}
          {message ? <p className="text-green-400 text-sm mb-3">{message}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-white text-black font-bold disabled:opacity-70 text-sm sm:text-base hover:bg-white/90 transition-colors"
          >
            {loading ? "Saving..." : "Register Subadmin"}
          </button>

          <p className="text-sm sm:text-base text-white/90 mt-5 text-center font-medium">
            Already have an account?{" "}
            <Link to="/login" className="underline text-white font-extrabold hover:text-white/80 transition-colors">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default UserRegister;