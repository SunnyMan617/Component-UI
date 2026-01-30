export default function ButtonComponent() {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
        Primary
      </button>
      <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
        Secondary
      </button>
    </div>
  );
}

