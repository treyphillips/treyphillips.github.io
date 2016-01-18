var quote-populate = document.getElementsClassName();
  var quotes = [];
  var index= 0;
  quote[0]=[
    'head': 'I want you to be confident.',
    'subhead':'Complete Customer Confidence',
    'quote': '“When you own or rent an Anderson Hydra Platform, I want you to be confident you’ve received exceptional value.” (Pat Dandridge, President, CEO Anderson Hydra Platforms)'
  ];
  quote[1]=[
    'head': 'Safety had been our heritage.',
    'subhead':'Thousands of lives are affected',
    'quote': 'When one of our platforms is being used, a life is in the balance. I never forget that. And when our platform is finished being used, hundreds of thousands of lives are affected. We take that seriously—at every step of the process—and we build each platform with one thing in mind: lives matter.'
  ];
  quote[2]=[
    'head': 'We take it seriously.',
    'subhead':'Lives depend on it',
    'quote': '“We take what we do seriously—every piece of it—because we know the lives of your crew, and every person who passes over the completed bridge, depend on it.” (Russ Kitts, Purchasing and Inventory, Anderson Hydra Platforms)'
  ];
  quote[3]=[
    'head': 'Something I can be proud of.',
    'subhead':'Complete Customer Confidence',
    'quote': '“This company makes equipment we can all be proud of. It’s satisfying knowing what you produce is high-quality, and especially when it makes life safer for people. I always wanted to be part of something like this, and I still do.” (Eric Shehane, Fabrication and Welding, Anderson Hydra Platforms)'
  ];
  quote[4]=[
    'head': 'I’ll make you three promises.',
    'subhead':'Words you can count on',
    'quote': '“We won’t lie to you. We’ll build you a safe product. And we’ll do whatever we can to make sure you are happy.” (Gerald          , General Manager, Anderson Hydra Platforms)'
  ];
  index = Math.floor(Math.random() * quotes.length);
  document.write(quotes[index]);
