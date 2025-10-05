const motivationalQuotes = [
    "Believe in yourself and all that you are! 🌟",
    "Success is the sum of small efforts repeated day in and day out! 💪",
    "Your education is a dress rehearsal for a life that is yours to lead! 🎓",
    "The future belongs to those who believe in the beauty of their dreams! ✨",
    "Study hard, dream big, achieve more! 🚀",
    "Every accomplishment starts with the decision to try! 🌈",
    "You are capable of amazing things! Keep going! 🏆",
    "Education is the key to unlock the golden door of freedom! 🔑"
];

let currentSubject = '';
let currentChapter = '';
let currentQuestions = [];

const subjectsData = {
    physics: {
        name: 'Physics',
        chapters: [
            { id: 'ch1', name: 'Units and Measurement', subtitle: 'Textual 1.1 to 1.2.3 and 1.6' },
            { id: 'ch2', name: 'Mathematical Methods', subtitle: 'Textual 2.1 to 2.3.3' },
            { id: 'ch4', name: 'Laws of Motion', subtitle: 'Textual 4.3 to 4.3.3 and examples' },
            { id: 'ch12', name: 'Magnetism', subtitle: 'Complete chapter' }
        ]
    },
    chemistry: {
        name: 'Chemistry',
        chapters: [
            { id: 'ch1', name: 'Basic Principles in Chemistry', subtitle: '15 MCQs' },
            { id: 'ch2', name: 'Basic Principles in Organic Chemistry', subtitle: '15 MCQs' },
            { id: 'ch3', name: 'Chemical Bonding till Hybridization', subtitle: '15 MCQs' },
            { id: 'ch4', name: 'Adsorption and Colloids', subtitle: '15 MCQs' }
        ]
    },
    mathematics: {
        name: 'Mathematics',
        chapters: [
            { id: 'ch1', name: 'Measures of Dispersion', subtitle: '15 MCQs' },
            { id: 'ch2', name: 'Sets and Relation', subtitle: '15 MCQs' }
        ]
    },
    biology: {
        name: 'Biology',
        chapters: [
            { id: 'ch1', name: 'Living World', subtitle: '15 MCQs' },
            { id: 'ch3', name: 'Kingdom Plantae', subtitle: '15 MCQs' },
            { id: 'ch5', name: 'Cell Structure and Organization', subtitle: '15 MCQs' },
            { id: 'ch15', name: 'Excretion and Osmoregulation', subtitle: '15 MCQs' }
        ]
    }
};

const questionsBank = {
    physics: {
        ch1: [
            { q: "The SI base unit of length is:", options: ["Meter", "Centimeter", "Kilometer", "Foot"], correct: [0] },
            { q: "The SI unit of mass is:", options: ["Gram", "Kilogram", "Pound", "Tonne"], correct: [1] },
            { q: "Which of the following is a derived unit?", options: ["Meter", "Kilogram", "Newton", "Second"], correct: [2] },
            { q: "The dimension of velocity is:", options: ["[L T⁻¹]", "[M L T⁻²]", "[L T²]", "[M L² T⁻²]"], correct: [0] },
            { q: "A measurement is said to be precise if:", options: ["It is close to the true value", "It has small random errors", "It is repeatable", "Both B and C"], correct: [3] },
            { q: "Least count of a measuring instrument refers to:", options: ["Maximum measurable value", "Minimum measurable value", "Difference between actual and measured value", "Error in measurement"], correct: [1] },
            { q: "The fundamental quantity in mechanics is:", options: ["Mass", "Time", "Length", "All of the above"], correct: [3] },
            { q: "A vernier caliper is used to measure:", options: ["Mass", "Length", "Time", "Force"], correct: [1] },
            { q: "The dimension of force is:", options: ["[M L T⁻²]", "[M L² T⁻²]", "[M L T⁻¹]", "[L T⁻²]"], correct: [0] },
            { q: "The SI unit of time is:", options: ["Hour", "Second", "Minute", "Day"], correct: [1] },
            { q: "Accuracy of an instrument refers to:", options: ["Closeness to true value", "Repeatability of readings", "Smallest division", "Range of instrument"], correct: [0] },
            { q: "The speed of light in vacuum is measured in units of:", options: ["m/s", "m/s²", "N", "J"], correct: [0] },
            { q: "Significant figures are used to:", options: ["Express precision of a measurement", "Express error", "Express dimensions", "None of the above"], correct: [0] },
            { q: "The dimension of energy is:", options: ["[M L² T⁻²]", "[M L T⁻¹]", "[M L² T⁻¹]", "[M L T⁻²]"], correct: [0] },
            { q: "1 dyne is equal to:", options: ["10⁻³ N", "10⁻⁴ N", "10⁻⁵ N", "10⁻⁶ N"], correct: [1] }
        ],
        ch2: [
            { q: "The distance between two points (x₁, y₁) and (x₂, y₂) in 2D is:", options: ["√[(x₂-x₁)² + (y₂-y₁)²]", "(x₂-x₁) + (y₂-y₁)", "(x₂-x₁)² + (y₂-y₁)²", "√[(x₂+x₁)² + (y₂+y₁)²]"], correct: [0] },
            { q: "If A = 3î + 4ĵ, the magnitude of A is:", options: ["3", "4", "5", "7"], correct: [2] },
            { q: "Dot product of two perpendicular vectors is:", options: ["Maximum", "Zero", "Minimum", "Undefined"], correct: [1] },
            { q: "Cross product of two parallel vectors is:", options: ["Maximum", "Zero", "Equal to dot product", "Infinity"], correct: [1] },
            { q: "The unit vector along vector A = 3î + 4ĵ is:", options: ["3î + 4ĵ", "(3/5)î + (4/5)ĵ", "î + ĵ", "(4/3)î + ĵ"], correct: [1] },
            { q: "The derivative of x² with respect to x is:", options: ["x²", "2x", "x", "2"], correct: [1] },
            { q: "Integration of 1/x is:", options: ["ln(x) + C", "x + C", "1/x + C", "x²/2 + C"], correct: [0] },
            { q: "The displacement vector is given by:", options: ["Integral of velocity", "Derivative of velocity", "Integral of acceleration", "Product of velocity and time"], correct: [0] },
            { q: "If A·B = AB cos θ, θ is:", options: ["Angle between A and B", "Magnitude of A", "Magnitude of B", "Sum of vectors"], correct: [0] },
            { q: "The unit of gradient in velocity vs time graph is:", options: ["m/s²", "m/s", "m", "s"], correct: [0] },
            { q: "For a particle moving along a straight line, dx/dt represents:", options: ["Acceleration", "Displacement", "Velocity", "Force"], correct: [2] },
            { q: "If A = aî + bĵ + ck̂, what is the magnitude of A?", options: ["a + b + c", "√(a + b + c)", "√(a² + b² + c²)", "a² + b² + c²"], correct: [2] },
            { q: "The slope of a position-time graph gives:", options: ["Acceleration", "Velocity", "Displacement", "Force"], correct: [1] },
            { q: "For a vector A, A·A is:", options: ["Magnitude of A", "Square of magnitude of A", "Zero", "Vector in opposite direction"], correct: [1] },
            { q: "If v = dx/dt, then dx represents:", options: ["Velocity", "Infinitesimal displacement", "Acceleration", "Force"], correct: [1] }
        ],
        ch4: [
            { q: "Newton's second law of motion states that:", options: ["Force is equal to mass multiplied by velocity", "Force is equal to the rate of change of momentum", "Momentum is always conserved", "Acceleration is inversely proportional to force"], correct: [1] },
            { q: "A body of mass 2 kg is acted upon by a force of 10 N. Its acceleration is:", options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"], correct: [1] },
            { q: "The unit of force in SI system is:", options: ["Dyne", "Newton", "Joule", "Pascal"], correct: [1] },
            { q: "If two forces act on a body in opposite directions and are equal in magnitude, the body:", options: ["Moves with uniform acceleration", "Remains at rest or moves with uniform velocity", "Moves with increasing velocity", "Moves with decreasing velocity"], correct: [1] },
            { q: "A block slides on a rough horizontal surface. The force of friction depends on:", options: ["Velocity of the block", "Acceleration of the block", "Normal reaction between the block and surface", "Time of motion"], correct: [2] },
            { q: "A body of mass 5 kg is moving with velocity 3 m/s. Its momentum is:", options: ["8 kg·m/s", "15 kg·m/s", "1.66 kg·m/s", "5 kg·m/s"], correct: [1] },
            { q: "Which of the following is an example of Newton's third law?", options: ["A book resting on a table", "A rocket lifting off the ground", "A car accelerating on a straight road", "A ball rolling on a smooth floor"], correct: [1] },
            { q: "Two bodies of equal mass collide elastically. Which quantity remains conserved?", options: ["Momentum only", "Kinetic energy only", "Both momentum and kinetic energy", "Neither momentum nor kinetic energy"], correct: [2] },
            { q: "A man jumps from a boat to a dock. As he jumps forward, the boat moves backward. This illustrates:", options: ["Newton's first law", "Newton's second law", "Newton's third law", "Law of conservation of energy"], correct: [2] },
            { q: "The acceleration of a body sliding down an inclined plane depends on:", options: ["Mass of the body only", "Angle of inclination and acceleration due to gravity", "Coefficient of friction only", "Velocity of the body"], correct: [1] },
            { q: "A force F acts on a body of mass m, initially at rest. The velocity after time t is given by:", options: ["v = m/Ft", "v = F/mt", "v = Ft/m", "v = mt/F"], correct: [2] },
            { q: "The weight of a body on Earth is given by:", options: ["W = mg", "W = m/g", "W = g/m", "W = m + g"], correct: [0] },
            { q: "Friction is necessary for:", options: ["Sliding on ice", "Walking or driving vehicles", "Free fall of objects", "Floating of objects in water"], correct: [1] },
            { q: "If the net external force acting on a body is zero, then:", options: ["Its acceleration is zero", "Its velocity is zero", "Its momentum is zero", "Its mass is zero"], correct: [0] },
            { q: "A force of 20 N is applied on a body of mass 4 kg. The body accelerates at:", options: ["4 m/s²", "5 m/s²", "20 m/s²", "0.2 m/s²"], correct: [1] }
        ],
        ch12: [
            { q: "The SI unit of magnetic field (B) is:", options: ["Tesla", "Gauss", "Weber", "Ampere"], correct: [0] },
            { q: "A current-carrying wire produces:", options: ["Electric field", "Magnetic field", "Gravitational field", "Electrostatic field"], correct: [1] },
            { q: "Magnetic field lines around a bar magnet:", options: ["Emerge from south and enter north", "Emerge from north and enter south", "Are straight", "Are random"], correct: [1] },
            { q: "Magnetic field lines emerge from:", options: ["North pole", "South pole", "Both poles", "Neither"], correct: [0] },
            { q: "SI unit of magnetic field is:", options: ["Weber", "Tesla", "Gauss", "Ampere"], correct: [1] },
            { q: "Magnetic field inside a solenoid is:", options: ["Zero", "Uniform", "Non-uniform", "Infinite"], correct: [1] },
            { q: "A current carrying conductor in magnetic field experiences:", options: ["Force", "Torque", "EMF", "Nothing"], correct: [0] },
            { q: "The direction of magnetic force is given by:", options: ["Right hand rule", "Left hand rule", "Fleming's rule", "All"], correct: [2] },
            { q: "Magnetic field due to straight conductor is:", options: ["Straight lines", "Circular", "Parallel", "Random"], correct: [1] },
            { q: "Two parallel conductors carrying current in same direction:", options: ["Attract", "Repel", "No effect", "Rotate"], correct: [0] },
            { q: "The material with highest permeability is:", options: ["Air", "Iron", "Copper", "Aluminum"], correct: [1] },
            { q: "Diamagnetic materials have permeability:", options: ["μ > 1", "μ < 1", "μ = 1", "μ = 0"], correct: [1] },
            { q: "Earth's magnetic field is approximately:", options: ["Uniform", "Dipole field", "Zero", "Infinite"], correct: [1] },
            { q: "Magnetic monopoles:", options: ["Exist", "Do not exist", "Exist in pairs", "Are theoretical"], correct: [1] },
            { q: "Hysteresis loop represents:", options: ["B-H relationship", "E-I relationship", "V-I relationship", "None"], correct: [0] }
        ]
    },
    chemistry: {
        ch1: [
            { q: "The law of constant proportions states that:", options: ["Mass is always conserved", "A compound always contains elements in the same proportion by mass", "Reactions occur at constant temperature", "Energy is conserved"], correct: [1] },
            { q: "Which of the following is a physical change?", options: ["Rusting of iron", "Melting of ice", "Combustion of coal", "Baking of cake"], correct: [1] },
            { q: "The molar mass of a substance is:", options: ["Mass of 1 atom", "Mass of 1 mole of substance", "Mass of 1 molecule", "Number of particles in 1 mole"], correct: [1] },
            { q: "Avogadro's number is:", options: ["6.022 × 10²¹", "6.022 × 10²³", "6.022 × 10²⁴", "6.022 × 10²²"], correct: [1] },
            { q: "One mole of O₂ molecules contains:", options: ["1 atom of oxygen", "2 atoms of oxygen", "6.022 × 10²³ molecules", "6.022 × 10²³ atoms"], correct: [2] },
            { q: "The law of multiple proportions was given by:", options: ["Dalton", "Gay-Lussac", "Avogadro", "Lavoisier"], correct: [0] },
            { q: "Empirical formula gives:", options: ["Exact number of atoms in a molecule", "Simplest ratio of atoms in a compound", "Mass of compound", "Number of molecules in 1 mole"], correct: [1] },
            { q: "Which of the following is an intensive property?", options: ["Mass", "Volume", "Density", "Weight"], correct: [2] },
            { q: "If 10 g of H reacts with 80 g of O, the ratio of masses of O to H is:", options: ["1:8", "8:1", "1:1", "8:10"], correct: [1] },
            { q: "A mixture differs from a compound in that:", options: ["Composition is fixed", "Elements are chemically combined", "Components can be separated physically", "Reacts chemically"], correct: [2] },
            { q: "The molecular formula of hydrogen peroxide is:", options: ["H₂O", "H₂O₂", "HO", "H₂O₃"], correct: [1] },
            { q: "A physical change involves:", options: ["Formation of a new substance", "Change in energy only", "Change in state without change in composition", "Both A and B"], correct: [2] },
            { q: "Which scientist is known for the law of conservation of mass?", options: ["Lavoisier", "Dalton", "Gay-Lussac", "Avogadro"], correct: [0] },
            { q: "The number of moles in 18 g of water is:", options: ["0.5 mol", "1 mol", "2 mol", "1.5 mol"], correct: [1] },
            { q: "Which of the following is a chemical change?", options: ["Boiling water", "Dissolving salt in water", "Burning magnesium", "Melting wax"], correct: [2] }
        ],
        ch2: [
            { q: "Organic compounds mainly contain:", options: ["C and H", "C, H, and O only", "H and O only", "Metals and nonmetals"], correct: [0] },
            { q: "Functional group is:", options: ["Atom or group responsible for characteristic reactions", "Part of the molecule not reactive", "Always a halogen", "Only hydrogen atom"], correct: [0] },
            { q: "Homologous series differ by:", options: ["Number of atoms in molecule", "Same functional group, successive members differ by –CH₂–", "Mass only", "Molecular formula exactly"], correct: [1] },
            { q: "Methane belongs to which homologous series?", options: ["Alkene", "Alkane", "Alkyne", "Alcohol"], correct: [1] },
            { q: "Which is saturated hydrocarbon?", options: ["Ethene", "Ethyne", "Ethane", "Benzene"], correct: [2] },
            { q: "Functional group in alcohol is:", options: ["–OH", "–COOH", "–CHO", "–NH₂"], correct: [0] },
            { q: "Isomerism arises due to:", options: ["Same molecular formula but different arrangement", "Different elements", "Different masses only", "Different density"], correct: [0] },
            { q: "Which of the following is aromatic?", options: ["Ethene", "Benzene", "Ethyne", "Methane"], correct: [1] },
            { q: "Primary alcohol has –OH group attached to:", options: ["Primary carbon", "Secondary carbon", "Tertiary carbon", "Hydrogen"], correct: [0] },
            { q: "Alkanes are generally:", options: ["Saturated", "Unsaturated", "Aromatic", "Ionic"], correct: [0] },
            { q: "The molecular formula of ethylene is:", options: ["C₂H₆", "C₂H₄", "C₂H₂", "C₂H₅"], correct: [1] },
            { q: "Functional group in aldehydes is:", options: ["–OH", "–COOH", "–CHO", "–CO–"], correct: [2] },
            { q: "Isomeric compounds have:", options: ["Same chemical properties", "Same molecular formula but different structure", "Different physical and chemical formula", "Always aromatic"], correct: [1] },
            { q: "Ethyne is an example of:", options: ["Alkane", "Alkene", "Alkyne", "Aromatic"], correct: [2] },
            { q: "Methanol is:", options: ["Primary alcohol", "Secondary alcohol", "Tertiary alcohol", "Aldehyde"], correct: [0] }
        ],
        ch3: [
            { q: "Ionic bond is formed by:", options: ["Sharing electrons", "Transfer of electrons", "Van der Waals forces", "Hydrogen bonding"], correct: [1] },
            { q: "Covalent bond is formed by:", options: ["Transfer of electrons", "Sharing of electrons", "Electrostatic forces only", "Hydrogen bonding"], correct: [1] },
            { q: "Electronegativity measures:", options: ["Atomic size", "Ability to attract shared electrons", "Mass of atom", "Ionization energy"], correct: [1] },
            { q: "Polar covalent bond arises due to:", options: ["Equal sharing of electrons", "Unequal sharing of electrons", "Electron transfer", "Ionic bond"], correct: [1] },
            { q: "Octet rule states:", options: ["Atoms gain 8 electrons", "Atoms tend to have 8 electrons in valence shell", "Atom loses 8 electrons", "Atom shares 8 protons"], correct: [1] },
            { q: "Lone pair electrons do not participate in:", options: ["Covalent bonding", "Ionic bonding", "Metallic bonding", "Hydrogen bonding"], correct: [0] },
            { q: "Hybridization is:", options: ["Mixing of atomic orbitals", "Transfer of electrons", "Polarization", "Formation of ions"], correct: [0] },
            { q: "sp³ hybridization leads to:", options: ["Linear geometry", "Tetrahedral geometry", "Trigonal planar", "Octahedral"], correct: [1] },
            { q: "sp² hybridization leads to:", options: ["Linear geometry", "Tetrahedral", "Trigonal planar", "Bent"], correct: [2] },
            { q: "Example of sp³ hybridized atom:", options: ["Carbon in CH₄", "Carbon in C₂H₄", "Carbon in C₂H₂", "Oxygen in H₂O"], correct: [0] },
            { q: "The bond angle in H₂O due to sp³ hybridization is approximately:", options: ["109.5°", "120°", "180°", "90°"], correct: [0] },
            { q: "Ionic compounds generally have:", options: ["Low melting points", "High melting points", "No definite structure", "Metallic luster"], correct: [1] },
            { q: "Covalent compounds generally:", options: ["Conduct electricity in solid state", "Are brittle", "May have low melting and boiling points", "Are metallic"], correct: [2] },
            { q: "Sigma bond (σ) is formed by:", options: ["Sidewise overlap", "End-on overlap", "Magnetic forces", "Ionic interaction"], correct: [1] },
            { q: "Pi bond (π) is formed by:", options: ["End-on overlap", "Sidewise overlap", "Transfer of electrons", "Ionic forces"], correct: [1] }
        ],
        ch4: [
            { q: "Adsorption is:", options: ["Bulk accumulation", "Surface accumulation", "Formation of solution", "Chemical reaction only"], correct: [1] },
            { q: "Physisorption occurs due to:", options: ["Covalent bonding", "Van der Waals forces", "Ionic bonding", "Hydrogen bonding"], correct: [1] },
            { q: "Chemisorption involves:", options: ["Physical forces only", "Chemical bond formation", "No bonding", "Adsorption by surface area only"], correct: [1] },
            { q: "Colloids are:", options: ["True solutions", "Heterogeneous mixtures", "Homogeneous mixtures", "Compounds"], correct: [1] },
            { q: "Example of lyophilic colloid:", options: ["Starch in water", "Smoke", "Aerosol", "Barium sulfate sol"], correct: [0] },
            { q: "Tyndall effect is due to:", options: ["Absorption of light", "Scattering of light by colloidal particles", "Reflection of light", "Refraction of light only"], correct: [1] },
            { q: "Emulsion is:", options: ["Liquid in liquid colloid", "Solid in liquid colloid", "Gas in liquid colloid", "Liquid in gas colloid"], correct: [0] },
            { q: "Gel is:", options: ["Semi-solid colloid", "Liquid colloid", "Gas colloid", "Solid solution"], correct: [0] },
            { q: "Adsorption increases with:", options: ["Decrease in surface area", "Increase in surface area", "Decrease in temperature for physisorption", "Both B and C"], correct: [3] },
            { q: "Dialysis is used to:", options: ["Purify colloids", "Form colloids", "Measure adsorption", "Increase particle size"], correct: [0] },
            { q: "Example of gas in liquid colloid:", options: ["Foam", "Milk", "Gel", "Sol"], correct: [0] },
            { q: "Example of solid in gas colloid:", options: ["Smoke", "Fog", "Foam", "Milk"], correct: [0] },
            { q: "Adsorption is different from absorption in that:", options: ["Absorption occurs on surface", "Adsorption occurs in bulk", "Adsorption occurs on surface, absorption in bulk", "Both are same"], correct: [2] },
            { q: "Lyophobic colloids are:", options: ["Solvent attracting", "Solvent repelling", "Ionic only", "Non-polar only"], correct: [1] },
            { q: "Frost on grass is an example of:", options: ["Adsorption of water vapor", "Absorption of water", "Sublimation", "Condensation"], correct: [0] }
        ]
    },
    mathematics: {
        ch1: [
            { q: "The range of the data set {3, 7, 9, 15, 20} is:", options: ["17", "20", "15", "10"], correct: [0] },
            { q: "The formula for variance of a population is:", options: ["σ² = Σ(xi - μ)²/n", "σ² = Σ(xi - μ)/n", "σ² = Σxi²/n", "σ² = (Σxi)²/n"], correct: [0] },
            { q: "Standard deviation is:", options: ["Square of variance", "Square root of variance", "Half of variance", "Twice the variance"], correct: [1] },
            { q: "Coefficient of variation (CV) is:", options: ["(SD/Mean) × 100", "SD × Mean", "Mean / SD", "SD – Mean"], correct: [0] },
            { q: "For the data {5, 8, 10, 12, 15}, the mean deviation about mean is:", options: ["3.2", "4", "5", "2.5"], correct: [1] },
            { q: "Which of the following is most affected by extreme values?", options: ["Mean", "Median", "Mode", "Range"], correct: [3] },
            { q: "The range of a data set is always:", options: ["Positive or zero", "Negative", "Zero only", "Negative or zero"], correct: [0] },
            { q: "Variance of a constant data set (all values equal) is:", options: ["0", "1", "n", "Infinity"], correct: [0] },
            { q: "Which measure of dispersion is least affected by outliers?", options: ["Range", "Standard deviation", "Interquartile range (IQR)", "Variance"], correct: [2] },
            { q: "If all data points in a set are multiplied by 3, SD becomes:", options: ["Unchanged", "3 times original SD", "Square of original SD", "One-third of original SD"], correct: [1] },
            { q: "For data {2, 4, 6, 8}, the mean is 5. The mean deviation about mean is:", options: ["1", "1.5", "2", "2.5"], correct: [2] },
            { q: "The formula for population variance differs from sample variance by:", options: ["Denominator n–1 instead of n", "Denominator n+1 instead of n", "Numerator squared", "Nothing"], correct: [0] },
            { q: "If SD = 0, then all data points are:", options: ["Equal", "Increasing", "Decreasing", "Random"], correct: [0] },
            { q: "The median absolute deviation (MAD) is:", options: ["Mean of absolute deviations from mean", "Median of absolute deviations from median", "SD of data", "Range of data"], correct: [1] },
            { q: "Which of the following is true for a uniform data set?", options: ["Mean = Median = Mode", "Range = 0", "SD = 0", "All of the above"], correct: [3] }
        ],
        ch2: [
            { q: "Which of the following is a subset of A = {1, 2, 3}?", options: ["{1, 2}", "{4}", "{1, 4}", "{5}"], correct: [0] },
            { q: "If A = {1, 2, 3}, B = {3, 4}, then A ∪ B =", options: ["{1, 2}", "{1, 2, 3, 4}", "{3, 4}", "{1, 2, 4}"], correct: [1] },
            { q: "The intersection of two disjoint sets is:", options: ["Null set", "Universal set", "A", "B"], correct: [0] },
            { q: "Complement of set A contains:", options: ["Elements not in A", "Elements in A", "All sets", "Null set"], correct: [0] },
            { q: "Cardinality of set {2, 4, 6, 8} is:", options: ["3", "4", "5", "6"], correct: [1] },
            { q: "Which of the following is true for universal set U?", options: ["Contains all elements under discussion", "Contains null elements", "Intersection with any set is empty", "Union with any set is null"], correct: [0] },
            { q: "Relation R on set A is:", options: ["Subset of A × A", "Subset of A", "Subset of union of sets", "None"], correct: [0] },
            { q: "Reflexive relation means:", options: ["Every element is related to itself", "No element is related to itself", "Relation is symmetric", "Relation is transitive"], correct: [0] },
            { q: "Symmetric relation means:", options: ["If aRb, then bRa", "aRb implies not bRa", "aRb implies a≠b", "aRb implies nothing"], correct: [0] },
            { q: "Transitive relation means:", options: ["aRb and bRc ⇒ aRc", "aRb and bRc ⇒ bRa", "aRb only", "None"], correct: [0] },
            { q: "Empty relation is:", options: ["Reflexive", "Symmetric", "Both reflexive and symmetric", "Symmetric but not reflexive"], correct: [3] },
            { q: "If A = {1, 2, 3}, then A × A has how many elements?", options: ["3", "6", "9", "12"], correct: [2] },
            { q: "Domain of relation R = {(1,2), (2,3), (3,4)} is:", options: ["{2, 3, 4}", "{1, 2, 3}", "{1, 2, 3, 4}", "{1, 4}"], correct: [1] },
            { q: "Range of relation R = {(1,5), (2,5), (3,6)} is:", options: ["{1, 2, 3}", "{5, 6}", "{1, 2, 3, 5, 6}", "{6}"], correct: [1] },
            { q: "Which of the following is an example of a function?", options: ["{(1,2), (1,3), (2,4)}", "{(1,2), (2,3), (3,4)}", "{(1,1), (2,2), (2,3)}", "{(1,2), (2,2), (2,3)}"], correct: [1] }
        ]
    },
    biology: {
        ch1: [
            { q: "Which of the following is not a characteristic of living organisms?", options: ["Growth", "Reproduction", "Photosynthesis", "Adaptation"], correct: [2] },
            { q: "Who is known as the 'Father of Taxonomy'?", options: ["Darwin", "Linnaeus", "Mendel", "Hooke"], correct: [1] },
            { q: "The science of naming, describing, and classifying organisms is called:", options: ["Ecology", "Taxonomy", "Physiology", "Genetics"], correct: [1] },
            { q: "Binomial nomenclature was introduced by:", options: ["Lamarck", "Linnaeus", "Haeckel", "Hooke"], correct: [1] },
            { q: "Which of the following is a living entity?", options: ["Virus", "Bacterium", "Prion", "DNA"], correct: [1] },
            { q: "Metabolism refers to:", options: ["Reproduction only", "Growth only", "Sum of all chemical reactions", "Movement only"], correct: [2] },
            { q: "Autotrophs obtain energy from:", options: ["Organic compounds", "Inorganic compounds", "Sunlight", "Other organisms"], correct: [2] },
            { q: "Which of the following is considered a microbe?", options: ["Fungi", "Virus", "Plant", "Animal"], correct: [1] },
            { q: "A population consists of:", options: ["Individuals of same species in same area", "Different species in same area", "Individuals of same species in different areas", "Entire ecosystem"], correct: [0] },
            { q: "Adaptation helps organisms to:", options: ["Grow faster", "Survive in environment", "Reproduce sexually", "Photosynthesize"], correct: [1] },
            { q: "Who discovered cells?", options: ["Mendel", "Hooke", "Schwann", "Leeuwenhoek"], correct: [1] },
            { q: "All living organisms are made up of:", options: ["Cells", "Organs", "Tissues", "Molecules"], correct: [0] },
            { q: "Which of the following is a characteristic feature of life?", options: ["Non-responsiveness", "Irritability", "Inactivity", "Rigidity"], correct: [1] },
            { q: "A species is defined as:", options: ["Group of organisms with similar characteristics", "Group of organisms capable of interbreeding and producing fertile offspring", "Group of genera", "Organisms living in same habitat"], correct: [1] },
            { q: "The basic unit of classification is:", options: ["Kingdom", "Species", "Genus", "Phylum"], correct: [1] }
        ],
        ch3: [
            { q: "Which of the following plants is non-vascular?", options: ["Moss", "Fern", "Pine", "Grass"], correct: [0] },
            { q: "Gymnosperms produce seeds:", options: ["Enclosed in fruits", "Naked seeds", "In flowers", "In cones only"], correct: [1] },
            { q: "Bryophytes are restricted to:", options: ["Dry habitats", "Aquatic habitats", "Moist habitats", "Desert habitats"], correct: [2] },
            { q: "Vascular tissue is absent in:", options: ["Pteridophytes", "Bryophytes", "Angiosperms", "Gymnosperms"], correct: [1] },
            { q: "Angiosperms are:", options: ["Flowering plants", "Non-flowering plants", "Mosses", "Algae"], correct: [0] },
            { q: "Gymnosperms include:", options: ["Cycas", "Marchantia", "Ferns", "Grasses"], correct: [0] },
            { q: "Pteridophytes reproduce by:", options: ["Seeds", "Spores", "Vegetative parts", "Buds"], correct: [1] },
            { q: "Which of the following is an example of monocotyledon?", options: ["Mango", "Wheat", "Rose", "Sunflower"], correct: [1] },
            { q: "Phloem conducts:", options: ["Water", "Minerals", "Food", "Hormones"], correct: [2] },
            { q: "Xylem conducts:", options: ["Water and minerals", "Food", "Hormones", "Sugars only"], correct: [0] },
            { q: "Bryophytes lack:", options: ["Roots, stems, and leaves", "Vascular tissue", "Flowers", "All of the above"], correct: [3] },
            { q: "Seeds of gymnosperms are:", options: ["Fertilized", "Naked", "Enclosed", "Spores"], correct: [1] },
            { q: "Example of pteridophyte is:", options: ["Funaria", "Adiantum", "Pinus", "Marchantia"], correct: [1] },
            { q: "Angiosperms are classified into:", options: ["Monocots and dicots", "Gymnosperms and pteridophytes", "Bryophytes and algae", "Mosses and ferns"], correct: [0] },
            { q: "Cones are found in:", options: ["Bryophytes", "Gymnosperms", "Angiosperms", "Pteridophytes"], correct: [1] }
        ],
        ch5: [
            { q: "Cell was discovered by:", options: ["Hooke", "Leeuwenhoek", "Schleiden", "Schwann"], correct: [0] },
            { q: "Cell theory was proposed by:", options: ["Hooke", "Schleiden and Schwann", "Virchow", "Darwin"], correct: [1] },
            { q: "Prokaryotic cells lack:", options: ["Nucleus", "Cell wall", "Ribosomes", "DNA"], correct: [0] },
            { q: "Eukaryotic cells have:", options: ["Membrane-bound organelles", "No nucleus", "70S ribosomes", "Circular DNA"], correct: [0] },
            { q: "Cell membrane is:", options: ["Selectively permeable", "Fully permeable", "Impermeable", "None"], correct: [0] },
            { q: "Fluid mosaic model was proposed by:", options: ["Hooke", "Singer and Nicolson", "Watson and Crick", "Darwin"], correct: [1] },
            { q: "Cell wall in plants is made of:", options: ["Cellulose", "Chitin", "Peptidoglycan", "Protein"], correct: [0] },
            { q: "Mitochondria is called:", options: ["Powerhouse", "Protein factory", "Suicidal bag", "Control center"], correct: [0] },
            { q: "Ribosomes are involved in:", options: ["Protein synthesis", "Photosynthesis", "Respiration", "Cell division"], correct: [0] },
            { q: "Lysosomes contain:", options: ["Enzymes", "Pigments", "DNA", "RNA"], correct: [0] },
            { q: "Chloroplasts are sites of:", options: ["Respiration", "Photosynthesis", "Protein synthesis", "Cell division"], correct: [1] },
            { q: "Nucleus contains:", options: ["DNA", "RNA", "Nucleolus", "All"], correct: [3] },
            { q: "Endoplasmic reticulum is of:", options: ["One type", "Two types", "Three types", "Four types"], correct: [1] },
            { q: "Golgi apparatus is involved in:", options: ["Packaging", "Secretion", "Both", "Neither"], correct: [2] },
            { q: "Vacuoles are large in:", options: ["Animal cells", "Plant cells", "Both", "Neither"], correct: [1] }
        ],
        ch15: [
            { q: "The primary excretory organ in humans is:", options: ["Liver", "Kidney", "Lungs", "Skin"], correct: [1] },
            { q: "Functional unit of kidney is:", options: ["Nephron", "Glomerulus", "Bowman's capsule", "Loop of Henle"], correct: [0] },
            { q: "Filtration in kidney occurs at:", options: ["Loop of Henle", "Glomerulus", "Collecting duct", "Distal tubule"], correct: [1] },
            { q: "Reabsorption mainly occurs in:", options: ["Proximal convoluted tubule", "Loop of Henle", "Collecting duct", "Distal convoluted tubule"], correct: [0] },
            { q: "ADH regulates:", options: ["Blood pressure", "Water reabsorption", "Salt secretion", "pH balance"], correct: [1] },
            { q: "Urea is formed in:", options: ["Kidney", "Liver", "Lungs", "Intestine"], correct: [1] },
            { q: "Excretion in amoeba occurs through:", options: ["Nephridia", "Contractile vacuole", "Kidney", "Lungs"], correct: [1] },
            { q: "Loop of Henle helps in:", options: ["Filtration only", "Concentration of urine", "Excretion of urea", "Secretion of ADH"], correct: [1] },
            { q: "Main nitrogenous waste in mammals is:", options: ["Ammonia", "Urea", "Uric acid", "Creatinine"], correct: [1] },
            { q: "Osmoregulation refers to:", options: ["Excretion of urea", "Regulation of water and salts", "Filtration of blood", "Respiration"], correct: [1] },
            { q: "Malpighian tubules are found in:", options: ["Humans", "Cockroach", "Earthworm", "Fish"], correct: [1] },
            { q: "Glomerular filtrate is:", options: ["Blood without cells and proteins", "Pure water", "Urine", "Plasma"], correct: [0] },
            { q: "Kidney stones are formed mainly due to:", options: ["Excess urea", "Calcium salts", "Excess water", "Proteins"], correct: [1] },
            { q: "Distal convoluted tubule is responsible for:", options: ["Filtration", "Selective reabsorption and secretion", "Osmoregulation only", "Protein synthesis"], correct: [1] },
            { q: "Which of the following is a function of liver in excretion?", options: ["Formation of urea", "Filtration of blood", "Concentration of urine", "Reabsorption of water"], correct: [0] }
        ]
    }
};

function setMotivationalQuote() {
    const quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    document.getElementById('motivationText').textContent = quote;
}

function showSection(sectionName) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionName + '-section').classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

function showSubjectTests(subject) {
    currentSubject = subject;
    const subjectData = subjectsData[subject];
    
    document.getElementById('selected-subject-title').textContent = subjectData.name + ' - Select Chapter';
    
    const chaptersList = document.getElementById('chapters-list');
    chaptersList.innerHTML = '';
    
    subjectData.chapters.forEach(chapter => {
        const chapterCard = document.createElement('div');
        chapterCard.className = 'chapter-card';
        chapterCard.innerHTML = `
            <h4>${chapter.name}</h4>
            <p>${chapter.subtitle}</p>
        `;
        chapterCard.onclick = () => startTest(subject, chapter.id, chapter.name);
        chaptersList.appendChild(chapterCard);
    });
    
    document.querySelector('.subjects-grid').style.display = 'none';
    document.getElementById('chapter-selection').classList.remove('hidden');
}

function backToSubjects() {
    document.getElementById('chapter-selection').classList.add('hidden');
    document.querySelector('.subjects-grid').style.display = 'grid';
}

function startTest(subject, chapterId, chapterName) {
    currentChapter = chapterId;
    currentQuestions = questionsBank[subject][chapterId];
    
    document.getElementById('test-title').textContent = subjectsData[subject].name;
    document.getElementById('test-subtitle').textContent = chapterName;
    document.getElementById('progress-text').textContent = `Questions: 15`;
    
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        
        const optionsHTML = question.options.map((option, optIndex) => `
            <label class="option-label">
                <input type="checkbox" name="q${index}" value="${optIndex}">
                <span>${option}</span>
            </label>
        `).join('');
        
        questionCard.innerHTML = `
            <h4>Q${index + 1}. ${question.q}</h4>
            <div class="options">
                ${optionsHTML}
            </div>
        `;
        
        questionsContainer.appendChild(questionCard);
    });
    
    document.getElementById('chapter-selection').classList.add('hidden');
    document.getElementById('test-container').classList.remove('hidden');
}

function backToChapters() {
    document.getElementById('test-container').classList.add('hidden');
    document.getElementById('chapter-selection').classList.remove('hidden');
    document.getElementById('test-form').reset();
}

document.getElementById('test-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let correctCount = 0;
    let incorrectCount = 0;
    const detailedResults = [];
    
    currentQuestions.forEach((question, index) => {
        const selectedOptions = Array.from(document.querySelectorAll(`input[name="q${index}"]:checked`))
            .map(input => parseInt(input.value));
        
        const isCorrect = JSON.stringify(selectedOptions.sort()) === JSON.stringify(question.correct.sort());
        
        if (isCorrect) {
            correctCount++;
        } else {
            incorrectCount++;
        }
        
        detailedResults.push({
            question: question.q,
            selected: selectedOptions.map(i => question.options[i]),
            correct: question.correct.map(i => question.options[i]),
            isCorrect: isCorrect
        });
    });
    
    const percentage = ((correctCount / currentQuestions.length) * 100).toFixed(1);
    
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('incorrect-count').textContent = incorrectCount;
    document.getElementById('percentage').textContent = percentage + '%';
    
    const detailedResultsContainer = document.getElementById('detailed-results');
    detailedResultsContainer.innerHTML = '<h3 style="margin-bottom: 1rem;">Detailed Results:</h3>';
    
    detailedResults.forEach((result, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = `result-item ${result.isCorrect ? 'correct' : 'incorrect'}`;
        resultItem.innerHTML = `
            <strong>Q${index + 1}. ${result.question}</strong>
            <p><strong>Your answer:</strong> ${result.selected.join(', ') || 'Not answered'}</p>
            <p><strong>Correct answer:</strong> ${result.correct.join(', ')}</p>
        `;
        detailedResultsContainer.appendChild(resultItem);
    });
    
    document.getElementById('result-modal').style.display = 'block';
});

function closeResultModal() {
    document.getElementById('result-modal').style.display = 'none';
}

function retakeTest() {
    closeResultModal();
    document.getElementById('test-form').reset();
    window.scrollTo(0, 0);
}

window.onclick = function(event) {
    const modal = document.getElementById('result-modal');
    if (event.target === modal) {
        closeResultModal();
    }
}

window.onload = function() {
    setMotivationalQuote();
    setInterval(setMotivationalQuote, 10000);
};
