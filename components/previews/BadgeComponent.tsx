export default function BadgeComponent() {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
        Purple
      </span>
      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
        Blue
      </span>
      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
        Green
      </span>
    </div>
  );
}

