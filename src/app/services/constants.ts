export const schoolName = 'St. Xavier’s Public School';
export const schoolMail = 'bm000543@gmail.com';
export const HEADER_SECTION_CONTENT = {
  schoolName: schoolName,
  menuItems: [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Academics', id: 'academics' },
    { label: 'Admissions', id: 'admissions' },
    { label: 'Faculty', id: 'faculty' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Events', id: 'events' },
    { label: 'Blog', id: 'blog' },
    { label: 'Results', id: 'results' },
    { label: 'Fees', id: 'fees' },
    { label: 'Contact', id: 'contact' },
  ],

  moreMenuLabels: ['Faculty', 'Events', 'Blog', 'Results', 'Fees'],

  buttons: {
    feesStructure: 'Fees Structure',
    theme: 'Theme',
  },

  assets: {
    logo: 'assets/logo.png',
    feeStructurePdf: 'assets/download_fee_structure.pdf',
  },
};
export const ABOUT_SECTION_CONTENT = {
  header: {
    title: 'About Our School',
    subtitle: 'Our Journey and Vision in Education',
  },

  leftc: {
    mainHeading: 'Dedicated to Academic Excellence and Student Development',
    description: `${schoolName} is committed to delivering quality education 
    in a nurturing and disciplined environment. Our institution focuses on building strong 
    academic foundations, moral values, creativity, leadership, and confidence among students. 
    We strive to create responsible individuals prepared to excel in every stage of life.`,

    career: {
      title: 'Our Mission',
      text: `To provide value-based and holistic education that inspires students to 
      achieve academic excellence, develop critical thinking, and become responsible citizens 
      of society.`,
    },

    philosophy: {
      title: 'Our Educational Philosophy',
      parts: [
        { text: 'We believe every child deserves an environment that encourages ' },
        { text: 'learning', highlight: true },
        { text: ', builds strong ' },
        { text: 'character', highlight: true },
        { text: ', and promotes lifelong ' },
        { text: 'growth', highlight: true },
        { text: ' through quality education and positive values.' }
      ]
    }
  },

  quickProfile: {
    title: 'Quick Information',
    Profile: [
      { title: 'School Name:', value: schoolName },
      { title: 'Location:', value: 'Supaul, Thakurbari Road, Ward no.- 26, Bihar, India.' },
      { title: 'Medium:', value: 'English Medium' },
      { title: 'Focus:', value: 'Academic & Holistic Development' },
      { title: 'Activities:', value: 'Sports, Cultural & Co-curricular Activities' },
      { title: 'Environment:', value: 'Safe, Disciplined & Student-Friendly' },
    ]
  },

};
export const ACADEMICS_SECTION_CONTENT = {
  header: {
    title: 'Academics',
    subtitle: 'Quality Education from Pre-Primary to Class VIII',
  },

  intro:
    "Our academic curriculum is designed to provide strong conceptual learning, discipline, creativity, and overall development for students from primary to secondary level.",



  sections: [
    {
      title: 'Pre-Primary Education',
      classes: 'Play to U.Kg.',
      description:
        'Focus on foundational learning, communication skills, creativity, and interactive classroom activities for young learners.',
    },

    {
      title: 'Primary Education',
      classes: 'Class 1 - 5',
      description:
        'Focus on foundational learning, communication skills, creativity, and interactive classroom activities for young learners.',
    },

    {
      title: 'Middle School Education',
      classes: 'Class 6 - 8',
      description:
        'Encouraging analytical thinking, subject understanding, practical learning, and participation in co-curricular activities.',
    },
  ],

  highlights: [
    'Experienced Teaching Staff',
    'Smart Learning Environment',
    'Regular Assessments & Exams',
    'Sports & Cultural Activities',
    'Student-Centered Learning',
    'Focus on Moral Values & Discipline',
  ],
};
export const ADMISSIONS_SECTION_CONTENT = {
  header: {
    title: 'Admissions',
    subtitle: 'Enroll Your Child for a Bright Future',
  },

  intro:
    "Admissions are open for classes 1 to 10. We welcome students into a positive learning environment focused on academic excellence, discipline, and overall personality development.",

  steps: [
    {
      title: 'Application Form',
      description:
        'Collect and submit the admission form with required student details.',
    },

    {
      title: 'Document Verification',
      description:
        'Submit academic records, transfer certificate, birth certificate, and passport-size photographs.',
    },

    {
      title: 'Interaction / Assessment',
      description:
        'Students may attend a basic interaction or assessment based on the class level.',
    },

    {
      title: 'Admission Confirmation',
      description:
        'Complete the fee process and confirm admission successfully.',
    },
  ],

  requirements: [
    'Birth Certificate',
    'Previous Academic Records',
    'Transfer Certificate (if applicable)',
    'Passport Size Photographs',
    'Aadhar Card Copy',
  ],

  contact: {
    title: 'Admission Assistance',
    text:
      'For admission-related queries, parents can contact the school administration during working hours.',
  },
};
export const FACULTY_SECTION_CONTENT = {
  header: {
    title: 'Our Faculty',
    subtitle: 'Experienced & Dedicated Educators',
  },

  faculty: [
    {
      name: 'Mr. Baiju Mathew',
      role: 'Director',
      description:
        'Providing visionary leadership and guidance for the overall growth and development of the institution.',
      imageUrl: 'assets/faculty_1.jpeg',
      phone: '8757805509',
    },

    {
      name: 'Bina Kumari',
      role: 'Principal',
      description:
        'Leading academic excellence with focus on discipline, quality education, and student development.',
      imageUrl: 'assets/faculty_2.jpeg',
      phone: '9113183802',
    },
  ],
};
export const GALLERY_SECTION_CONTENT = {
  header: {
    title: 'School Gallery',
    subtitle: 'Moments of Learning, Growth & Celebration',
  },

  images: [
    {
      title: 'School Campus',
      imageUrl: 'assets/1.jpeg',
    },
    {
      title: 'Classroom Learning',
      imageUrl: 'assets/2.jpeg',
    },
    {
      title: 'Science Activity',
      imageUrl: 'assets/1.jpeg',
    },
    {
      title: 'Sports Activities',
      imageUrl: 'assets/4.jpeg',
    },
    {
      title: 'Annual Function',
      imageUrl: 'assets/5.jpeg',
    },
    {
      title: 'Cultural Program',
      imageUrl: 'assets/6.jpeg',
    },
  ],
};
export const EVENTS_SECTION_CONTENT = {
  header: {
    title: 'School Events',
    subtitle: 'Celebrating Learning, Talent & Achievements',
  },

  events: [
    {
      title: 'Annual Function',
      date: 'December 2026',
      description:
        'A grand cultural celebration featuring student performances, awards, music, dance, and creative activities.',
      imageUrl: 'assets/1.jpeg',
    },

    {
      title: 'Sports Day',
      date: 'January 2026',
      description:
        'Encouraging teamwork, fitness, discipline, and sportsmanship through various indoor and outdoor competitions.',
      imageUrl: 'assets/2.jpeg',
    },

    {
      title: 'Science Exhibition',
      date: 'August 2026',
      description:
        'Students showcase innovative science models, experiments, and creative projects to enhance practical learning.',
      imageUrl: 'assets/1.jpeg',
    },

    {
      title: 'Independence Day Celebration',
      date: '15 August 2026',
      description:
        'Patriotic performances, speeches, and activities promoting national pride and cultural values.',
      imageUrl: 'assets/4.jpeg',
    },
  ],
};
export const BLOG_SECTION_CONTENT = {
  header: {
    title: 'Latest Blogs',
    subtitle: 'Insights, Activities & School Updates',
  },

  blogs: [
    {
      title: 'Importance of Holistic Education',
      date: '12 May 2026',
      description:
        'Holistic education helps students grow academically, emotionally, socially, and ethically for a successful future.',
      imageUrl: 'assets/1.jpeg',
    },

    {
      title: 'Benefits of Sports in Student Life',
      date: '05 May 2026',
      description:
        'Sports activities improve discipline, teamwork, physical fitness, and confidence among students.',
      imageUrl: 'assets/2.jpeg',
    },

    {
      title: 'Creative Learning Through Activities',
      date: '28 April 2026',
      description:
        'Interactive learning methods and classroom activities make education engaging and effective for students.',
      imageUrl: 'assets/1.jpeg',
    },
  ],
};
export const RESULTS_SECTION_CONTENT = {
  header: {
    title: 'Academic Results',
    subtitle: 'Celebrating Student Success & Achievement',
  },

  intro:
    'Our students consistently achieve excellent academic performance through dedication, discipline, and quality education.',

  results: [],

  highlights: [
    'Excellent Board Results',
    'Meritorious Student Achievements',
    'Strong Academic Support',
    'Experienced Faculty Guidance',
    'Focus on Conceptual Learning',
    'Consistent Student Performance',
  ],
};
export const FEES_SECTION_CONTENT = {
  header: {
    title: 'Fees',
    subtitle: 'Transparent & Affordable Education Fees',
  },

  schoolFees: [
    {
      title: 'Admission Fee',
      amount: '₹ 2500',
    },
    {
      title: 'Tie, Belt, Badge & Diary',
      amount: '₹ 200',
    },
    {
      title: 'Examination Fee',
      amount: '₹ 200',
    },
    {
      title: 'Development Charge',
      amount: '₹ 1000',
    },
  ],

  monthlyCharges: [
    {
      title: 'Monthly Tuition Fee',
      amount: '₹ 900',
      note: 'Up to 10th of Each Month',
    },
    {
      title: 'Late Monthly Fee',
      amount: '₹ 1050',
      note: 'After 10th of Each Month',
    },
  ],

  transportFees: [
    {
      title: 'Local Conveyance',
      amount: '₹ 600',
    },
    {
      title: 'Out of Market Conveyance',
      amount: '₹ 700',
    },
  ],

  timing: [
    {
      season: 'Summer Timing',
      months: 'April to October',
      time: '07:30 AM to 12:30 PM',
    },
    {
      season: 'Winter Timing',
      months: 'November to March',
      time: '09:30 AM to 02:30 PM',
    },
  ],

  notice:
    'School fees must be deposited in advance before the 10th of every month.',
};
export const CERTIFICATIONS_SECTION_CONTENT = {
  header: {
    title: 'Certificates',
    subtitle: 'My professional credentials',
  },

  certificates: [
    {
      title: 'Basic Life Support (BLS)',
      issuer: 'Certified Body',
      imageUrl: 'https://picsum.photos/400/250?random=1',
    },
    {
      title: 'First Aid Certification',
      issuer: 'Certified Body',
      imageUrl: 'https://picsum.photos/400/250?random=2',
    },
    {
      title: 'Clinical Training Completion',
      issuer: 'Nursing College',
      imageUrl: 'https://picsum.photos/400/250?random=3',
    },
    {
      title: 'Community Health Training',
      issuer: 'Health Department',
      imageUrl: 'https://picsum.photos/400/250?random=4',
    },
    {
      title: 'Covid Duty Certificate',
      issuer: 'Government Hospital',
      imageUrl: 'https://picsum.photos/400/250?random=5',
    },
  ],
};
export const CONTACT_SECTION_CONTENT = {
  header: {
    title: 'Contact Our School',
    subtitle: "We are here to assist you with admissions and school-related inquiries.",
  },

  infoCard: {
    title: 'Contact Information',
    labels: {
      phone: 'School Phone',
      email: 'School Email',
      location: 'School Location',
    },
  },

  contactDetails: {
    phone: '+91 8757805509, 9122122615, 9431890566',
    email: schoolMail,
    location: 'Supaul, Thakurbari Road, Ward no.- 26, Bihar, India.',
  },

  form: {
    placeholders: {
      name: 'Parent / Guardian Name',
      email: 'Parent Email Address',
      message: 'Write your admission or school inquiry here...',
    },
    submitButton: 'Submit Inquiry',
    alerts: {
      success: 'Your message has been sent successfully!',
      invalid: 'Please fill out the form correctly',
    },
  },

  emailJs: {
    USER_ID: 'PvTkPcd3Zd3pVehUs',
    SERVICE_ID: 'service_x23ky4n',
    TEMPLATE_ID: 'template_nyw3s6k',
  },
};
export const FOOTER_SECTION_CONTENT = {
  profile: {
    name: schoolName,
    email: `mailto:${schoolMail}`,
  },

  copyrightText: 'All Rights Reserved.',

  description:
    'Designed with care to reflect professional dedication.',
};