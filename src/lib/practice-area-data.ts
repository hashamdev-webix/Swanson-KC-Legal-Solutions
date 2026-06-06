export interface PracticeAreaContent {
  slug: "corporate-law" | "civil-law" | "property-law" | "immigration-law";
  name: string;
  href: string;
  heroImage: string;
  heroH1: string;
  heroSubheading: string;
  heroDescription: string;
  heroPrimaryCta: { label: string; href: string };
  heroSecondaryCta: { label: string; href: string };
  introHeading: string;
  introParagraphs: string[];
  introCta: { label: string; href: string };
  services: Array<{
    title: string;
    description: string;
    includes: string[];
    cta: { label: string; href: string };
    iconName: string;
  }>;
  whoWeHelp: Array<{ title: string; description: string }>;
  commonNeeds: {
    title: string;
    youMayNeedHelpIf: string[];
    ourTeamCanAssistWith: string[];
    leftCta: { label: string; href: string };
    rightCta: { label: string; href: string };
  };
  process: Array<{ step: string; title: string; description: string }>;
  whyChooseUs: Array<{
    title: string;
    description: string;
    iconName: string;
  }>;
  midCta: {
    title: string;
    description: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  relatedAreas: Array<{
    slug: string;
    title: string;
    description: string;
    href: string;
    cta: string;
  }>;
  faqs: Array<{ question: string; answer: string }>;
  contactSectionHeading: string;
  contactSectionDescription: string;
  seo: { title: string; description: string };
}

export const practiceAreaContent: Record<
  PracticeAreaContent["slug"],
  PracticeAreaContent
> = {
  "corporate-law": {
    slug: "corporate-law",
    name: "Corporate Law",
    href: "/areas-of-practice/corporate-law",
    heroImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80",
    heroH1: "Corporate Law Services in Canada",
    heroSubheading: "Strategic legal support for entrepreneurs, business owners, corporations, partnerships, and commercial clients.",
    heroDescription: "At Swanson KC Legal Solutions, we help businesses make informed legal decisions with clear advice, carefully prepared documents, and practical corporate legal support. Whether you are starting a company, preparing a business contract, updating corporate records, or buying or selling a business, our team can guide you through the process.",
    heroPrimaryCta: { label: "Book a Corporate Law Consultation", href: "/contact-us" },
    heroSecondaryCta: { label: "View Services", href: "#services" },
    introHeading: "Business-Focused Legal Guidance",
    introParagraphs: [
      "Running a business involves important legal decisions at every stage. From selecting the right business structure to preparing contracts, maintaining corporate records, managing shareholder relationships, and completing commercial transactions, strong legal support can help protect the business and reduce future risk.",
      "Swanson KC Legal Solutions provides corporate law services for startups, small businesses, corporations, partnerships, entrepreneurs, professionals, and commercial clients. Our goal is to provide practical legal advice that supports your business objectives while keeping your legal documents organized, clear, and enforceable.",
    ],
    introCta: { label: "Speak With a Corporate Lawyer", href: "/contact-us" },
    services: [
      {
        title: "Business Incorporation",
        description: "We assist entrepreneurs and business owners with incorporating a company and setting up the legal foundation for their business.",
        includes: ["Federal or provincial incorporation", "Business name considerations", "Articles of incorporation", "Initial corporate organization", "Director and officer setup", "Corporate minute book setup"],
        cta: { label: "Get Incorporation Help", href: "/contact-us" },
        iconName: "Building2",
      },
      {
        title: "Business Contracts",
        description: "Clear and properly drafted contracts help protect business relationships and reduce misunderstandings. We assist with preparing, reviewing, and revising business agreements.",
        includes: ["Service agreements", "Supplier agreements", "Independent contractor agreements", "Client agreements", "Terms and conditions", "Contract review"],
        cta: { label: "Review a Business Contract", href: "/contact-us" },
        iconName: "FileText",
      },
      {
        title: "Shareholder Agreements",
        description: "A shareholder agreement can help clarify ownership rights, management roles, decision-making, share transfers, dispute procedures, and exit rights.",
        includes: ["Shareholder rights and duties", "Buy-sell provisions", "Management and voting rules", "Share transfer restrictions", "Deadlock provisions", "Dispute resolution terms"],
        cta: { label: "Prepare a Shareholder Agreement", href: "/contact-us" },
        iconName: "Users",
      },
      {
        title: "Partnership Agreements",
        description: "We assist business partners with written agreements that define roles, responsibilities, contributions, profit-sharing, decision-making, and exit terms.",
        includes: ["Partnership structure", "Roles and responsibilities", "Capital contributions", "Profit and loss sharing", "Exit and dissolution terms", "Dispute resolution clauses"],
        cta: { label: "Draft a Partnership Agreement", href: "/contact-us" },
        iconName: "Handshake",
      },
      {
        title: "Corporate Records",
        description: "Maintaining accurate corporate records is important for corporations, directors, officers, and shareholders. We assist with corporate organization and ongoing record updates.",
        includes: ["Minute book setup", "Annual resolutions", "Director/officer changes", "Shareholder updates", "Corporate filings support", "Corporate maintenance"],
        cta: { label: "Update Corporate Records", href: "/contact-us" },
        iconName: "FolderOpen",
      },
      {
        title: "Buying or Selling a Business",
        description: "Business purchases and sales involve contracts, due diligence, closing documents, risk review, and careful negotiation. We assist clients with legal aspects of business transactions.",
        includes: ["Asset purchase agreements", "Share purchase agreements", "Due diligence support", "Closing documents", "Transaction review", "Negotiation support"],
        cta: { label: "Get Transaction Support", href: "/contact-us" },
        iconName: "ArrowLeftRight",
      },
    ],
    whoWeHelp: [
      { title: "Startups", description: "We help new companies begin with proper structure, documents, and legal planning." },
      { title: "Small Businesses", description: "We assist businesses with contracts, agreements, records, and legal decisions." },
      { title: "Corporations", description: "We support companies with corporate records, commercial agreements, and governance matters." },
      { title: "Entrepreneurs", description: "We help founders protect ideas, organize structure, and plan next steps." },
      { title: "Partnerships", description: "We help partners define roles, responsibilities, ownership, exits, and disputes." },
      { title: "Professionals", description: "We assist professionals with corporate setup, agreements, and business records." },
      { title: "Commercial Clients", description: "We support clients with business transactions, commercial contracts, and negotiations." },
      { title: "Investors", description: "We assist clients reviewing business opportunities and deals." },
    ],
    commonNeeds: {
      title: "Common Corporate Legal Needs",
      youMayNeedHelpIf: ["You are starting a new business", "You need a contract reviewed or drafted", "You are adding or removing shareholders", "You are entering a partnership", "You are buying or selling a business", "You need to update corporate records", "You have a business dispute developing", "You need practical commercial advice"],
      ourTeamCanAssistWith: ["Choosing the right legal structure", "Preparing corporate documents", "Reviewing business agreements", "Maintaining corporate records", "Supporting business transactions", "Identifying legal risks", "Supporting negotiations", "Helping organize next steps"],
      leftCta: { label: "Discuss Your Business Matter", href: "/contact-us" },
      rightCta: { label: "Book a Consultation", href: "/contact-us" },
    },
    process: [
      { step: "01", title: "Consultation", description: "We discuss your business, goals, issue, transaction, or legal need." },
      { step: "02", title: "Document Review", description: "We review existing documents, corporate records, contracts, timelines, and business details." },
      { step: "03", title: "Legal Advice & Strategy", description: "We explain legal options, identify risks, and recommend a practical path forward." },
      { step: "04", title: "Completion & Next Steps", description: "We prepare, revise, file, organize, or support the required documents." },
    ],
    whyChooseUs: [
      { title: "Business-Focused Advice", description: "We focus on legal solutions that support real business decisions.", iconName: "Target" },
      { title: "Clear Documentation", description: "We help prepare and review business documents clearly so clients understand obligations and next steps.", iconName: "FileCheck" },
      { title: "Practical Advice", description: "We explain legal options in plain language so business owners can make informed decisions.", iconName: "MessageSquare" },
      { title: "Organized Process", description: "We help keep business matters structured, documented, and moving forward.", iconName: "ListChecks" },
      { title: "Risk-Aware Approach", description: "We help identify potential legal risks before they become larger business problems.", iconName: "ShieldAlert" },
      { title: "Ongoing Support", description: "We can support clients through setup, operations, transactions, and future business changes.", iconName: "RefreshCw" },
    ],
    midCta: {
      title: "Need Corporate Legal Support?",
      description: "Speak with Swanson KC Legal Solutions about incorporation, contracts, shareholder agreements, corporate records, business transactions, or general business legal needs.",
      primary: { label: "Book a Corporate Law Consultation", href: "/contact-us" },
      secondary: { label: "Contact the Firm", href: "/contact-us" },
    },
    relatedAreas: [
      { slug: "civil-law", title: "Civil Law", description: "Business disputes, contract issues, debt recovery, and settlement negotiations.", href: "/areas-of-practice/civil-law", cta: "View Civil Law" },
      { slug: "property-law", title: "Property Law", description: "Commercial leasing, real estate transactions, property agreements, and property-related business issues.", href: "/areas-of-practice/property-law", cta: "View Property Law" },
      { slug: "immigration-law", title: "Immigration Law", description: "Work permits, business immigration, employer support, and immigration matters connected to business operations.", href: "/areas-of-practice/immigration-law", cta: "View Immigration Law" },
    ],
    faqs: [
      { question: "What does a corporate lawyer help with?", answer: "A corporate lawyer can assist with business incorporation, corporate records, contracts, shareholder agreements, partnership agreements, commercial transactions, and general business legal advice." },
      { question: "Do I need a lawyer to incorporate a business?", answer: "Business owners can sometimes complete basic incorporation steps themselves, but legal guidance can help ensure the company is properly organized, documented, and structured for future growth or ownership changes." },
      { question: "Why is a shareholder agreement important?", answer: "A shareholder agreement can help define ownership rights, decision-making rules, share transfers, dispute procedures, exit rights, and other important terms between shareholders." },
      { question: "Can you review my business contract before I sign it?", answer: "Yes. Our firm can review business contracts and help explain important terms, risks, obligations, and suggested revisions before you sign." },
      { question: "Can the firm help if I am buying or selling a business?", answer: "Yes. We can assist with asset purchase agreements, share purchase agreements, due diligence support, closing documents, and transaction-related legal review." },
      { question: "Does contacting the firm create a lawyer-client relationship?", answer: "No. Contacting the firm or submitting a website form does not create a lawyer-client relationship. A formal relationship begins only after the firm confirms it can act for you and an engagement agreement is completed." },
    ],
    contactSectionHeading: "Contact Swanson KC Legal Solutions",
    contactSectionDescription: "Need help with a business or corporate legal matter? Contact our office to discuss incorporation, contracts, shareholder agreements, business transactions, or corporate records.",
    seo: {
      title: "Corporate Law Services in Canada | Swanson KC Legal Solutions",
      description: "Corporate legal services for entrepreneurs, businesses, corporations, and partnerships — incorporation, contracts, shareholder and partnership agreements, corporate records, and business transactions.",
    },
  },
  "civil-law": {
    slug: "civil-law",
    name: "Civil Law",
    href: "/areas-of-practice/civil-law",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80",
    heroH1: "Civil Law Services in Canada",
    heroSubheading: "Practical legal support for individuals and businesses involved in disputes, claims, negotiations, and court-related matters.",
    heroDescription: "At Swanson KC Legal Solutions, we help clients understand their rights, assess their options, and take practical steps toward resolving civil legal matters. Whether your issue involves a contract dispute, debt recovery, demand letter, settlement discussion, small claims, or civil litigation, our team can help you move forward with clarity.",
    heroPrimaryCta: { label: "Book a Civil Law Consultation", href: "/contact-us" },
    heroSecondaryCta: { label: "View Services", href: "#services" },
    introHeading: "Clear Guidance for Civil Disputes",
    introParagraphs: [
      "Civil legal matters can be stressful, time-sensitive, and document-heavy. A dispute may begin with a disagreement, unpaid invoice, broken contract, demand letter, property issue, or business conflict, but it can quickly become more serious if not handled carefully.",
      "Swanson KC Legal Solutions provides civil law services for individuals, businesses, landlords, tenants, contractors, professionals, and commercial clients. We focus on helping clients understand their legal position, organize the facts, review important documents, and choose a practical path forward through negotiation, settlement, or court-related steps where required.",
    ],
    introCta: { label: "Speak With a Civil Lawyer", href: "/contact-us" },
    services: [
      { title: "Civil Litigation", description: "We assist clients involved in civil disputes that may require legal advice, document review, negotiation, court filings, or representation.", includes: ["Civil claims", "Statement of claim review", "Defence review", "Court document preparation support", "Litigation strategy", "Settlement discussions"], cta: { label: "Discuss a Civil Claim", href: "/contact-us" }, iconName: "Scale" },
      { title: "Contract Disputes", description: "Contract disputes can arise when one party fails to perform, delays payment, misunderstands obligations, or breaches agreed terms. We help clients review contracts and understand their options.", includes: ["Contract review", "Breach of contract matters", "Payment disputes", "Service agreement disputes", "Business agreement disputes", "Negotiation support"], cta: { label: "Review a Contract Dispute", href: "/contact-us" }, iconName: "FileWarning" },
      { title: "Debt Recovery", description: "Unpaid invoices and debts can affect individuals and businesses. We help clients assess the debt, review documents, and take practical steps toward recovery.", includes: ["Unpaid invoice claims", "Debt documentation review", "Demand letters", "Negotiation support", "Payment plan discussions", "Small claims support"], cta: { label: "Get Debt Recovery Help", href: "/contact-us" }, iconName: "Receipt" },
      { title: "Demand Letters", description: "A demand letter can be an important first step before further legal action. We assist with preparing clear, firm, and professionally written letters.", includes: ["Payment demand letters", "Contract breach letters", "Settlement proposal letters", "Business dispute letters", "Property-related demand letters", "Pre-litigation communication"], cta: { label: "Prepare a Demand Letter", href: "/contact-us" }, iconName: "Mail" },
      { title: "Settlement Negotiations", description: "Not every civil matter needs to go to trial. We help clients explore practical settlement options, communicate clearly, and work toward resolution where possible.", includes: ["Settlement strategy", "Negotiation preparation", "Offer review", "Settlement agreement review", "Mediation preparation", "Communication with opposing parties"], cta: { label: "Discuss Settlement Options", href: "/contact-us" }, iconName: "Handshake" },
      { title: "Small Claims Matters", description: "Some disputes may be handled through small claims or simplified court procedures. We assist clients with understanding the process and preparing their matter.", includes: ["Small claims guidance", "Claim preparation support", "Document organization", "Evidence review", "Settlement discussions", "Hearing preparation support"], cta: { label: "Get Small Claims Help", href: "/contact-us" }, iconName: "Gavel" },
    ],
    whoWeHelp: [
      { title: "Individuals", description: "We help individuals understand disputes, claims, letters, and legal next steps." },
      { title: "Business Owners", description: "We assist businesses with unpaid invoices, contract issues, demands, and disputes." },
      { title: "Landlords & Tenants", description: "We assist with civil disputes connected to leases, property use, and obligations." },
      { title: "Contractors", description: "We help contractors with payment disputes and agreements." },
      { title: "Professionals", description: "We assist professionals with contract and service disputes." },
      { title: "Commercial Clients", description: "We support commercial clients with claims, disputes, settlement, and negotiations." },
      { title: "Creditors", description: "We assist clients trying to recover unpaid amounts through practical legal steps." },
      { title: "Defendants", description: "We help clients respond to claims and legal demands." },
    ],
    commonNeeds: {
      title: "Common Civil Legal Needs",
      youMayNeedHelpIf: ["You received a demand letter or legal claim", "Someone owes you money", "A contract has been breached", "You are being sued or threatened with court", "A business relationship has broken down", "You need to respond to a dispute", "You want to settle before going to court", "You are unsure what legal step comes next"],
      ourTeamCanAssistWith: ["Reviewing documents and facts", "Explaining legal options", "Preparing demand letters", "Responding to legal demands", "Supporting settlement discussions", "Organizing evidence and timelines", "Reviewing court-related documents", "Helping determine next steps"],
      leftCta: { label: "Discuss Your Civil Matter", href: "/contact-us" },
      rightCta: { label: "Book a Consultation", href: "/contact-us" },
    },
    process: [
      { step: "01", title: "Consultation", description: "We discuss the dispute, background, parties involved, timelines, and goals." },
      { step: "02", title: "Document & Evidence Review", description: "We review agreements, letters, invoices, court documents, communications, and evidence." },
      { step: "03", title: "Legal Options & Strategy", description: "We explain possible options such as negotiation, demand letters, settlement, or court steps." },
      { step: "04", title: "Resolution & Next Steps", description: "We assist with letters, negotiation, settlement, filings, or next actions." },
    ],
    whyChooseUs: [
      { title: "Clear Case Assessment", description: "We help clients understand the strengths, risks, and next steps in their matter.", iconName: "ClipboardCheck" },
      { title: "Practical Strategy", description: "We focus on realistic options that match the client's goals and timeline.", iconName: "Target" },
      { title: "Strong Documents", description: "We help organize facts, letters, evidence, and supporting documents.", iconName: "FileCheck" },
      { title: "Settlement-Focused", description: "Where possible, we help clients explore efficient resolution through negotiation or settlement.", iconName: "Handshake" },
      { title: "Responsive Support", description: "We keep clients informed and explain updates clearly throughout the process.", iconName: "Clock" },
      { title: "Court-Aware Approach", description: "We help clients understand when negotiation, settlement, or court steps may be required.", iconName: "Scale" },
    ],
    midCta: {
      title: "Need Help With a Civil Dispute?",
      description: "Speak with Swanson KC Legal Solutions about contract disputes, debt recovery, demand letters, small claims, settlement negotiations, or civil litigation matters.",
      primary: { label: "Book a Civil Law Consultation", href: "/contact-us" },
      secondary: { label: "Contact the Firm", href: "/contact-us" },
    },
    relatedAreas: [
      { slug: "corporate-law", title: "Corporate Law", description: "Business contracts, shareholder disagreements, commercial disputes, and business-related legal issues.", href: "/areas-of-practice/corporate-law", cta: "View Corporate Law" },
      { slug: "property-law", title: "Property Law", description: "Property disputes, leasing, landlord-tenant concerns, title issues, and real estate-related disputes.", href: "/areas-of-practice/property-law", cta: "View Property Law" },
      { slug: "immigration-law", title: "Immigration Law", description: "Immigration refusals, appeals, procedural fairness concerns, and related legal issues.", href: "/areas-of-practice/immigration-law", cta: "View Immigration Law" },
    ],
    faqs: [
      { question: "What does a civil lawyer help with?", answer: "A civil lawyer can assist with disputes between individuals, businesses, landlords, tenants, contractors, creditors, and other parties. Civil law matters may involve contracts, unpaid debts, demand letters, settlement discussions, small claims, or court proceedings." },
      { question: "Do all civil disputes go to court?", answer: "No. Many civil disputes can be resolved through negotiation, demand letters, settlement discussions, mediation, or other practical steps before court becomes necessary." },
      { question: "Can you help me respond to a demand letter?", answer: "Yes. Our firm can review the demand letter, explain the issues raised, assess relevant documents, and help prepare a response or resolution strategy." },
      { question: "Can you help recover unpaid invoices or debts?", answer: "Yes. We can help review the debt, prepare demand letters, discuss settlement options, and identify practical steps that may be available for recovery." },
      { question: "Can you review a contract dispute before I take legal action?", answer: "Yes. We can review the contract, communications, payment history, and facts to help you understand your position and available options." },
      { question: "Does contacting the firm create a lawyer-client relationship?", answer: "No. Contacting the firm or submitting a website form does not create a lawyer-client relationship. A formal relationship begins only after the firm confirms it can act for you and an engagement agreement is completed." },
    ],
    contactSectionHeading: "Contact Swanson KC Legal Solutions",
    contactSectionDescription: "Need help with a civil dispute or legal claim? Contact our office to discuss contract disputes, demand letters, debt recovery, settlement negotiations, small claims, or civil litigation matters.",
    seo: {
      title: "Civil Law Services in Canada | Swanson KC Legal Solutions",
      description: "Civil law services for individuals and businesses across Canada — contract disputes, debt recovery, demand letters, settlement negotiations, small claims, and civil litigation support.",
    },
  },
  "property-law": {
    slug: "property-law",
    name: "Property Law",
    href: "/areas-of-practice/property-law",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80",
    heroH1: "Property Law Services in Canada",
    heroSubheading: "Legal guidance for buyers, sellers, property owners, investors, landlords, tenants, and commercial property clients.",
    heroDescription: "At Swanson KC Legal Solutions, we assist clients with property transactions, real estate closings, leasing matters, refinancing, title transfers, and property-related legal issues. Whether you are buying a home, selling property, entering a lease, refinancing, or dealing with a property dispute, our team can help you understand your rights, obligations, and next steps.",
    heroPrimaryCta: { label: "Book a Property Law Consultation", href: "/contact-us" },
    heroSecondaryCta: { label: "View Services", href: "#services" },
    introHeading: "Clear Legal Support for Property Matters",
    introParagraphs: [
      "Property matters often involve important documents, deadlines, financial commitments, and legal obligations. Whether you are completing a real estate transaction, reviewing a lease, refinancing a property, transferring title, or dealing with a dispute, careful legal review can help reduce risk and protect your interests.",
      "Swanson KC Legal Solutions provides property law services for buyers, sellers, property owners, investors, landlords, tenants, developers, and commercial clients. Our approach is focused on clear communication, careful document review, practical legal advice, and organized support from start to finish.",
    ],
    introCta: { label: "Speak With a Property Lawyer", href: "/contact-us" },
    services: [
      { title: "Real Estate Transactions", description: "We assist clients with legal support for residential and commercial real estate matters, including reviewing documents, explaining obligations, and helping manage key transaction steps.", includes: ["Residential real estate transactions", "Commercial real estate transactions", "Document review", "Closing coordination", "Legal guidance before completion", "Transaction risk review"], cta: { label: "Discuss a Property Transaction", href: "/contact-us" }, iconName: "Home" },
      { title: "Purchase & Sale Closings", description: "Buying or selling property requires careful review of agreements, closing documents, title matters, deadlines, and financial instructions.", includes: ["Agreement review support", "Buyer closing support", "Seller closing support", "Closing document preparation", "Title and registration support", "Completion and possession support"], cta: { label: "Get Closing Support", href: "/contact-us" }, iconName: "Key" },
      { title: "Commercial Leasing", description: "Commercial leases can involve complex obligations, payment terms, renewal rights, repairs, termination clauses, and business risks. We help review and prepare lease documents.", includes: ["Commercial lease review", "Lease drafting support", "Renewal and extension terms", "Assignment and sublease review", "Tenant and landlord obligations", "Commercial property advice"], cta: { label: "Review a Commercial Lease", href: "/contact-us" }, iconName: "Building2" },
      { title: "Residential Leasing", description: "Residential lease issues can affect landlords, tenants, property managers, and homeowners. We assist with lease review, documentation, and property related concerns.", includes: ["Residential lease review", "Landlord and tenant documentation", "Lease obligations review", "Notice review support", "Rental property concerns", "Dispute prevention support"], cta: { label: "Discuss a Residential Lease", href: "/contact-us" }, iconName: "Building" },
      { title: "Mortgage & Refinancing", description: "Refinancing or mortgage-related matters often require accurate documentation, lender instructions, title review, and organized closing steps.", includes: ["Mortgage refinancing support", "Lender instruction review", "Mortgage document preparation", "Title review support", "Closing coordination", "Payout and discharge coordination"], cta: { label: "Get Refinancing Support", href: "/contact-us" }, iconName: "Landmark" },
      { title: "Title Transfers", description: "Title transfers require accurate legal documentation and careful handling of ownership interests. We assist clients with title and ownership changes.", includes: ["Transfer of ownership", "Adding or removing an owner", "Family-related title transfers", "Estate-related title considerations", "Registration support", "Document preparation"], cta: { label: "Discuss a Title Transfer", href: "/contact-us" }, iconName: "FileSignature" },
      { title: "Property Disputes", description: "Property disputes may involve ownership, agreements, boundaries, access, leases, payments, repairs, or other property related concerns.", includes: ["Property agreement disputes", "Ownership-related concerns", "Boundary or access concerns", "Lease-related disputes", "Demand letters", "Settlement discussions"], cta: { label: "Discuss a Property Dispute", href: "/contact-us" }, iconName: "AlertTriangle" },
      { title: "Landlord & Tenant Matters", description: "We assist landlords and tenants with lease-related questions, documents, obligations, notices, and property-use concerns.", includes: ["Lease review", "Notice review", "Rent or payment concerns", "Repairs and obligations", "Termination-related concerns", "Communication support"], cta: { label: "Get Landlord-Tenant Help", href: "/contact-us" }, iconName: "Users" },
    ],
    whoWeHelp: [
      { title: "Home Buyers", description: "We assist buyers with purchase documents, closing steps, title review, and legal guidance." },
      { title: "Home Sellers", description: "We help sellers complete sale-related documents, closing requirements, and transaction steps." },
      { title: "Property Owners", description: "We support owners with title, leasing, refinancing, and ownership-related matters." },
      { title: "Investors", description: "We assist investors with property transactions, leases, and documents." },
      { title: "Landlords", description: "We assist landlords with leases, notices, documentation, and property concerns." },
      { title: "Tenants", description: "We help tenants review leases, obligations, notices, and property issues." },
      { title: "Commercial Clients", description: "We support businesses with commercial leases, purchases, sales, and property related legal needs." },
      { title: "Families", description: "We assist families with title transfers and ownership changes." },
    ],
    commonNeeds: {
      title: "Common Property Legal Needs",
      youMayNeedHelpIf: ["You are buying or selling property", "You need help with a real estate closing", "You are entering a commercial lease", "You need a residential lease reviewed", "You are refinancing a property", "You need to transfer title", "You are dealing with a property dispute", "You need landlord-tenant legal guidance"],
      ourTeamCanAssistWith: ["Reviewing purchase and sale terms", "Preparing and reviewing documents", "Coordinating closing requirements", "Reviewing leases and obligations", "Supporting mortgage/refinancing", "Assisting with title transfers", "Explaining risks and next steps", "Supporting dispute resolution"],
      leftCta: { label: "Discuss Your Property Matter", href: "/contact-us" },
      rightCta: { label: "Book a Consultation", href: "/contact-us" },
    },
    process: [
      { step: "01", title: "Consultation", description: "We discuss your property matter, transaction, lease, ownership concern, or dispute." },
      { step: "02", title: "Document & Title Review", description: "We review agreements, leases, title issues, lender instructions, notices, and other relevant documents." },
      { step: "03", title: "Legal Review & Coordination", description: "We explain legal obligations, prepare or review documents, and coordinate with required parties." },
      { step: "04", title: "Completion & Next Steps", description: "We assist with closing, registration, lease steps, refinancing, or follow-up." },
    ],
    whyChooseUs: [
      { title: "Careful Document Review", description: "We help review important property documents so clients understand key terms and obligations.", iconName: "FileSearch" },
      { title: "Clear Communication", description: "We explain documents, obligations, timelines, and next steps in plain language.", iconName: "MessageSquare" },
      { title: "Transaction Support", description: "We assist clients through purchase, sale, leasing, refinancing, and title transfer processes.", iconName: "ClipboardList" },
      { title: "Risk-Aware Approach", description: "We help identify potential issues in documents, title, leases, and transaction steps.", iconName: "ShieldAlert" },
      { title: "Organized Process", description: "We help keep property matters structured, documented, and moving forward.", iconName: "ListChecks" },
      { title: "Practical Guidance", description: "We focus on practical legal support for buyers, sellers, owners, landlords, tenants, and investors.", iconName: "Target" },
    ],
    midCta: {
      title: "Need Help With a Property Matter?",
      description: "Speak with Swanson KC Legal Solutions about real estate transactions, purchase or sale closings, leasing, refinancing, title transfers, property disputes, or landlord-tenant matters.",
      primary: { label: "Book a Property Law Consultation", href: "/contact-us" },
      secondary: { label: "Contact the Firm", href: "/contact-us" },
    },
    relatedAreas: [
      { slug: "corporate-law", title: "Corporate Law", description: "Commercial property transactions, business purchases, commercial leases, and business structuring.", href: "/areas-of-practice/corporate-law", cta: "View Corporate Law" },
      { slug: "civil-law", title: "Civil Law", description: "Property disputes, lease disputes, demand letters, unpaid amounts, settlement, and court-related property matters.", href: "/areas-of-practice/civil-law", cta: "View Civil Law" },
      { slug: "immigration-law", title: "Immigration Law", description: "Property ownership, newcomer settlement, investor-related immigration considerations, and related legal needs.", href: "/areas-of-practice/immigration-law", cta: "View Immigration Law" },
    ],
    faqs: [
      { question: "What does a property lawyer help with?", answer: "A property lawyer can assist with real estate purchases, sales, closings, leases, refinancing, title transfers, property disputes, and landlord-tenant matters." },
      { question: "Do I need a lawyer when buying or selling property?", answer: "Property transactions usually involve important legal documents, title issues, closing requirements, and financial obligations. Legal guidance can help ensure documents are reviewed carefully and transaction steps are properly completed." },
      { question: "Can you review a commercial lease before I sign it?", answer: "Yes. Our firm can review commercial lease terms, explain key obligations, identify potential risks, and suggest revisions or negotiation points before signing." },
      { question: "Can you help with refinancing or mortgage-related documents?", answer: "Yes. We can assist with mortgage refinancing matters, lender instructions, title review, document preparation, and closing coordination." },
      { question: "Can you assist with transferring property title?", answer: "Yes. We can assist with title transfers, ownership changes, adding or removing an owner, document preparation, and registration-related steps." },
      { question: "Can you help with property disputes?", answer: "Yes. We can help review the documents and facts, explain possible options, prepare demand letters, support settlement discussions, and advise on next steps." },
      { question: "Does contacting the firm create a lawyer-client relationship?", answer: "No. Contacting the firm or submitting a website form does not create a lawyer-client relationship. A formal relationship begins only after the firm confirms it can act for you and an engagement agreement is completed." },
    ],
    contactSectionHeading: "Contact Swanson KC Legal Solutions",
    contactSectionDescription: "Need help with a property matter? Contact our office to discuss real estate closings, purchase or sale transactions, commercial leases, residential leases, refinancing, title transfers, or property disputes.",
    seo: {
      title: "Property Law Services in Canada | Swanson KC Legal Solutions",
      description: "Property law services across Canada — real estate transactions, residential and commercial leasing, refinancing, title transfers, and property disputes.",
    },
  },
  "immigration-law": {
    slug: "immigration-law",
    name: "Immigration Law",
    href: "/areas-of-practice/immigration-law",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80",
    heroH1: "Immigration Law Services in Canada",
    heroSubheading: "Legal guidance for individuals, families, workers, students, visitors, employers, and newcomers navigating Canadian immigration matters.",
    heroDescription: "At Swanson KC Legal Solutions, we assist clients with Canadian immigration applications, documentation, eligibility review, sponsorship matters, temporary residence, permanent residence, citizenship applications, and refusal-related concerns. Our team helps clients understand the process, prepare carefully, and move forward with confidence.",
    heroPrimaryCta: { label: "Book an Immigration Consultation", href: "/contact-us" },
    heroSecondaryCta: { label: "View Services", href: "#services" },
    introHeading: "Clear Legal Support for Canadian Immigration Matters",
    introParagraphs: [
      "Canadian immigration matters can involve detailed requirements, important deadlines, extensive documentation, and life-changing decisions. Whether you are applying to visit, study, work, immigrate permanently, sponsor a family member, or respond to a refusal, careful legal guidance can help you understand your options and prepare your matter properly.",
      "Swanson KC Legal Solutions provides immigration law services for individuals, families, students, workers, visitors, employers, and newcomers. Our approach is focused on clear communication, careful document review, practical legal advice, and organized support throughout the immigration process.",
    ],
    introCta: { label: "Speak With an Immigration Lawyer", href: "/contact-us" },
    services: [
      { title: "Permanent Residence", description: "Permanent residence applications require careful review of eligibility, supporting documents, personal history, work history, family information, and immigration forms.", includes: ["Eligibility review", "Document checklist support", "Application preparation support", "Personal history review", "Family information review", "Submission readiness review"], cta: { label: "Discuss Permanent Residence", href: "/contact-us" }, iconName: "BadgeCheck" },
      { title: "Express Entry", description: "Express Entry is a major pathway for skilled workers seeking permanent residence in Canada. We assist clients with understanding the process and preparing required information.", includes: ["Express Entry profile guidance", "CRS-related document review", "Work history and education review", "Invitation-related support", "Application document preparation", "Post-invitation document review"], cta: { label: "Get Express Entry Guidance", href: "/contact-us" }, iconName: "Send" },
      { title: "Work Permits", description: "Work permit matters may involve employers, job offers, supporting documents, eligibility review, and timelines. We help clients understand the type of work permit and documentation needed.", includes: ["Work permit eligibility review", "Employer-supported work permits", "Open work permit guidance", "Job offer document review", "Supporting document checklist", "Extension-related support"], cta: { label: "Discuss a Work Permit", href: "/contact-us" }, iconName: "Briefcase" },
      { title: "Study Permits", description: "Study permit applications require careful preparation of acceptance letters, financial documentation, study plans, personal information, and supporting evidence.", includes: ["Study permit application support", "Letter of acceptance review", "Financial document review", "Study plan support", "Family information review", "Extension or restoration guidance"], cta: { label: "Discuss a Study Permit", href: "/contact-us" }, iconName: "GraduationCap" },
      { title: "Visitor Visas", description: "Visitor visa matters may involve travel purpose, ties to home country, financial support, invitation letters, previous travel, and supporting documents.", includes: ["Visitor visa application support", "Invitation letter review", "Travel purpose documentation", "Financial document review", "Previous refusal review", "Extension-related support"], cta: { label: "Discuss a Visitor Visa", href: "/contact-us" }, iconName: "Plane" },
      { title: "Family Sponsorship", description: "Family sponsorship applications require careful documentation of relationship, eligibility, financial information, identity documents, and application forms.", includes: ["Spousal sponsorship", "Common-law partner sponsorship", "Dependent child sponsorship", "Parent or grandparent sponsorship", "Relationship evidence review", "Application package support"], cta: { label: "Discuss Family Sponsorship", href: "/contact-us" }, iconName: "Heart" },
      { title: "Citizenship Applications", description: "Citizenship applications involve residency history, identity documents, language or knowledge requirements where applicable, and careful review before submission.", includes: ["Citizenship eligibility review", "Residency history review", "Document checklist support", "Application preparation support", "Family application considerations", "Submission readiness review"], cta: { label: "Discuss Citizenship", href: "/contact-us" }, iconName: "Award" },
      { title: "Immigration Refusals & Related Concerns", description: "A refusal or immigration concern can be stressful and time-sensitive. We help clients review refusal reasons, assess options, and organize next steps.", includes: ["Refusal letter review", "Previous application review", "Document gap review", "Re-application strategy", "Procedural concern review", "Next-step guidance"], cta: { label: "Review a Refusal", href: "/contact-us" }, iconName: "AlertCircle" },
    ],
    whoWeHelp: [
      { title: "Individuals", description: "We assist individuals with visas, PR, citizenship, and document review." },
      { title: "Families", description: "We help families with sponsorship, dependent matters, and immigration applications." },
      { title: "Students", description: "We support students applying for study permits, extensions, and document review." },
      { title: "Workers", description: "We assist workers with work permits and job-related documents." },
      { title: "Visitors", description: "We assist visitors with visitor visas, invitation letters, and extension-related concerns." },
      { title: "Newcomers", description: "We help newcomers understand documents, status, applications, and next steps." },
      { title: "Employers", description: "We assist employers with immigration document needs connected to workers." },
      { title: "Sponsors", description: "We assist sponsors with family sponsorship applications." },
    ],
    commonNeeds: {
      title: "Common Immigration Legal Needs",
      youMayNeedHelpIf: ["You want to apply for permanent residence", "You need Express Entry guidance", "You are applying for a work permit", "You are applying for a study permit", "You need a visitor visa or extension", "You want to sponsor a family member", "You are applying for citizenship", "You received a refusal or procedural issue"],
      ourTeamCanAssistWith: ["Reviewing eligibility and options", "Preparing document checklists", "Reviewing forms and supporting documents", "Identifying missing information", "Reviewing refusal reasons", "Explaining next steps clearly", "Supporting application preparation", "Organizing timelines and priorities"],
      leftCta: { label: "Discuss Your Immigration Matter", href: "/contact-us" },
      rightCta: { label: "Book a Consultation", href: "/contact-us" },
    },
    process: [
      { step: "01", title: "Consultation", description: "We discuss your immigration goal, timeline, current status, and concerns." },
      { step: "02", title: "Eligibility & Document Review", description: "We review your goals, background, status, immigration history, and available records." },
      { step: "03", title: "Document Preparation & Strategy", description: "We identify required documents, organize information, review forms, and explain the recommended path." },
      { step: "04", title: "Submission Support & Next Steps", description: "We support final review, submission readiness, follow-up, and next steps." },
    ],
    whyChooseUs: [
      { title: "Careful Document Review", description: "We help review important forms, records, supporting documents, and application packages.", iconName: "FileSearch" },
      { title: "Clear Communication", description: "We explain immigration options, document needs, timelines, and next steps in clear language.", iconName: "MessageSquare" },
      { title: "Practical Guidance", description: "We help clients understand possible paths and next steps based on the information available.", iconName: "Target" },
      { title: "Organized Process", description: "We help clients organize documents, timelines, forms, and supporting evidence from the start.", iconName: "ListChecks" },
      { title: "Client-Focused Support", description: "We work with individuals, families, workers, students, visitors, and newcomers.", iconName: "Users" },
      { title: "Multi-Category Support", description: "We assist with temporary residence, permanent residence, sponsorship, citizenship, and refusals.", iconName: "Layers" },
    ],
    midCta: {
      title: "Need Help With a Canadian Immigration Matter?",
      description: "Speak with Swanson KC Legal Solutions about permanent residence, Express Entry, work permits, study permits, visitor visas, family sponsorship, citizenship applications, or immigration refusals.",
      primary: { label: "Book an Immigration Consultation", href: "/contact-us" },
      secondary: { label: "Contact the Firm", href: "/contact-us" },
    },
    relatedAreas: [
      { slug: "corporate-law", title: "Corporate Law", description: "Employer-supported work permits, business-related immigration matters, companies hiring foreign workers, and business setup.", href: "/areas-of-practice/corporate-law", cta: "View Corporate Law" },
      { slug: "civil-law", title: "Civil Law", description: "Refusals, procedural concerns, document disputes, legal responses, and related civil concerns.", href: "/areas-of-practice/civil-law", cta: "View Civil Law" },
      { slug: "property-law", title: "Property Law", description: "Property ownership, settlement planning, housing matters, leasing, and newcomer property needs in Canada.", href: "/areas-of-practice/property-law", cta: "View Property Law" },
    ],
    faqs: [
      { question: "What does an immigration lawyer help with?", answer: "An immigration lawyer can assist with immigration eligibility review, application preparation, document review, permanent residence, Express Entry, work permits, study permits, visitor visas, family sponsorship, citizenship applications, refusals, and related immigration concerns." },
      { question: "Can you guarantee that my immigration application will be approved?", answer: "No. No lawyer or consultant can guarantee approval of an immigration application. Decisions are made by the relevant immigration authorities. Our role is to help clients understand requirements, prepare carefully, and submit organized information." },
      { question: "Can you help if my visa or immigration application was refused?", answer: "Yes. Our firm can review the refusal letter, assess the previous application, identify possible issues, and help discuss potential next steps, which may include re-applying or considering other available options depending on the circumstances." },
      { question: "Can you help with Express Entry?", answer: "Yes. We can assist with Express Entry profile guidance, document review, post-invitation support, application preparation, and general guidance on information needed for the process." },
      { question: "Can you help with work permit or study permit applications?", answer: "Yes. We can assist with work permit and study permit matters, including document review, application preparation support, extension-related concerns, and previous refusal review where applicable." },
      { question: "Can you help sponsor a family member to Canada?", answer: "Yes. We can assist with family sponsorship matters, including spousal sponsorship, common-law partner sponsorship, dependent child sponsorship, parent or grandparent sponsorship, relationship evidence review, and application preparation support." },
      { question: "Can you help with Canadian citizenship applications?", answer: "Yes. We can assist with citizenship application preparation, document checklist support, residency history review, family application considerations, and submission readiness review." },
      { question: "Does contacting the firm create a lawyer-client relationship?", answer: "No. Contacting the firm or submitting a website form does not create a lawyer-client relationship. A formal relationship begins only after the firm confirms it can act for you and an engagement agreement is completed." },
    ],
    contactSectionHeading: "Contact Swanson KC Legal Solutions",
    contactSectionDescription: "Need help with a Canadian immigration matter? Contact our office to discuss permanent residence, Express Entry, work permits, study permits, visitor visas, family sponsorship, citizenship, or immigration refusals.",
    seo: {
      title: "Immigration Law Services in Canada | Swanson KC Legal Solutions",
      description: "Canadian immigration law services — permanent residence, Express Entry, work permits, study permits, visitor visas, family sponsorship, citizenship applications, and refusal review.",
    },
  },
};
