function Footer() {
  return (
    <div className="bg-transparent border-t-2 border-t-purple-600 mx-2 sm:mx-5 flex flex-col justify-center py-7 items-center">
      <div className="mb-4 text-center w-full flex justify-center">
          <p className="flex flex-wrap w-[80%] text-center text-gray-400">Thank you for taking the time to visit my portfolio. Your interest and support mean the world to me. I hope you enjoyed exploring my work as much as I enjoyed creating it. Let&apos;s stay connected and keep inspiring each other!</p>
      </div>
      <div className="mb-4 text-center flex gap-4">
          <a href="https://www.linkedin.com/in/aakrit-rajput" target="_blank" className="block my-2 text-gray-500 hover:text-purple-500 hover:underline">LinkedIn</a>
          <a href="https://github.com/aakritrajput" target="_blank" className="block my-2 text-gray-500 hover:text-purple-500 hover:underline">GitHub</a>
      </div>
      <div className="text-center">
            <p className="text-gray-500">&copy; 2025 aakrit. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
