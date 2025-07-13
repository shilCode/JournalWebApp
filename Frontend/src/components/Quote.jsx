export const Quote = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 h-screen flex justify-center items-center p-4">
      <div className="max-w-lg p-8 bg-white shadow-2xl rounded-xl transform transition-all hover:scale-105">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-3">
            Demo Notes App for Test Automation
          </h1>
        </div>
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg shadow-inner">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-3">
            Click on the Demo User to view the app.
          </div>
        </div>
      </div>
    </div>
  );
};
