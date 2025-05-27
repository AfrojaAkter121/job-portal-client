import React from 'react';

const AboutTeamInfo = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-8 border border-gray-200">
      {/* Welcome Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Jthemes Team</h2>
        <p className="text-gray-700">
          The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy
          enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and
          the need for organizational resiliency.
        </p>
        <p className="text-gray-700 mt-2">
          The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for
          illustrative design and typography. This candidate will have experience working with numerous design platforms,
          such as digital and print forms.
        </p>
      </section>

      {/* Essential Skills */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Essential Knowledge, Skills, and Experience</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>A portfolio demonstrating well thought through and polished end-to-end customer journeys</li>
          <li>5+ years of industry experience in interactive design and/or visual design</li>
          <li>Excellent interpersonal skills</li>
          <li>Aware of trends in mobile, communications, and collaboration</li>
          <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
          <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
          <li>History of impacting shipping products with your work</li>
          <li>A Bachelor’s Degree in Design (or related field) or equivalent professional experience</li>
          <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
        </ul>
      </section>

      {/* Preferred Experience */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Preferred Experience</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Designing user experiences for enterprise software/services</li>
          <li>Creating and applying established design principles and interaction patterns</li>
          <li>Aligning or influencing design thinking with teams working in other geographies</li>
        </ul>
      </section>

      {/* Product Designer Role */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Designer</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Product knowledge:</strong> Deeply understand the technology and features of the assigned product area.</li>
          <li><strong>Research:</strong> Provide human and business impact insights for products.</li>
          <li><strong>Deliverables:</strong> Create competitive analyses, user flows, wireframes, mockups, and prototypes that solve real user problems.</li>
          <li><strong>Communication:</strong> Share UX results with design team, cross-functional partners, and stakeholders using clear language that simplifies complexity.</li>
        </ul>
      </section>

      {/* Footer */}
      <div className="text-sm text-gray-500 text-right mt-4">
        <em>— Exela Movers</em>
      </div>
    </div>
  );
};

export default AboutTeamInfo;
