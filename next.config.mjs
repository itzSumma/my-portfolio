/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/Sharmin_Sultana_Resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="Sharmin_Sultana_Resume.pdf"',
          },
        ],
      },
      {
        source: "/resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="Sharmin_Sultana_Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
