function GithubStats() {
  return (
    <div className="flex flex-col items-center py-10 text-white">
        <h2 className="text-3xl font-bold mb-6">GitHub Stats</h2>
      
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=aakritrajput&theme=react-dark"
            alt="GitHub Contribution Graph"
            className="w-full sm:w-[600px] rounded-lg shadow-lg"
          />
      
          <img
            src="https://github-readme-stats.vercel.app/api?username=aakritrajput&show_icons=true&theme=react"
            alt="GitHub Stats"
            className="w-full sm:w-[500px] rounded-lg shadow-lg"
          />
      
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=aakritrajput&layout=compact&theme=react"
            alt="Top Languages"
            className="w-full sm:w-[500px] rounded-lg shadow-lg"
          />
      
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=aakritrajput&theme=react"
            alt="GitHub Streak Stats"
            className="w-full sm:w-[500px] rounded-lg shadow-lg"
          />
        </div>
</div>

  )
}

export default GithubStats
