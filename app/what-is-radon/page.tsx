export default function WhatIsRadon() {
  return (
      <section className="bg-white text-[#00384a] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-1">WHAT IT IS RADON?</h2>
        <h3 className="text-xl font-semibold mb-6">Protect Your Home and Health Today.</h3>
        <p className="max-w-3xl mx-auto mb-12 text-sm text-gray-800">
          Radon is a naturally occurring radioactive gas that forms from the decay of uranium in soil, rock, and water. <strong>It is colorless, odorless, and tasteless</strong>,
          making it undetectable withou specialized testing. Radon is part of the environment and can be found almost everywhere, but it becomes a concern when it accumulates to high levels indoors, particularly in enclosed spaces like homes, schools, and workplaces.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded">
            <h4 className="text-orange-500 font-semibold mb-2">Impact on Health</h4>
            <p className="text-sm text-left">Radon is a radioactive gas and the <strong>second leading cause of lung cancer</strong> after smoking, responsible for thousands of deaths annually.</p>
            <br />
            <p className="text-sm text-left">Prolonged exposure to high radon levels damages lung tissue, increasing cancer risk, especially for smokers.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h4 className="text-orange-500 font-semibold mb-2">Regulations and Statistics</h4>
            <p className="text-sm text-left">Radon is a significant issue in Canada due to its geology and climate, with <strong>7% of Canadian Homes</strong> having radon levels above the national guideline of 200 Bq/m³.</p>
            <br />
            <p className="text-sm text-left">Health Canada actively promotes radon testing and mitigation, and the National Building Code includes radon reduction measures for new homes.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h4 className="text-orange-500 font-semibold mb-2">How Radon Enters Your Home?</h4>
            <p className="text-sm text-left">Radon seeps into homes through cracks in foundations, gaps around pipes, sump pumps, and construction joints.</p>
            <br />
            <p className="text-sm text-left">It originates from the natural decay of uranium in soil and rock, moving upward into buildings due to pressure differences.</p>
          </div>
        </div>
      </section>
  );
}
