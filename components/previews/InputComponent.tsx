export default function InputComponent() {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Enter text..."
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      />
    </div>
  );
}

