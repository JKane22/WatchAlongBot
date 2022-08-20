import { Toast } from "flowbite-react";
import React from "react";

// Icons
import { FaCheckCircle } from 'react-icons/fa'

export default function CompletionEvent() {
  return (
    <div>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <FaCheckCircle width={24} height={24} />
        </div>
        <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
        <Toast.Toggle />
      </Toast>
    </div>
  );
}
