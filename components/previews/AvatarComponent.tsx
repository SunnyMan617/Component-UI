export default function AvatarComponent() {
  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="relative inline-block">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
          JD
        </div>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      <div className="relative inline-block">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
          AB
        </div>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
    </div>
  );
}

