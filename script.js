var posts = [
  {
    image: "image1",
    category: "Design",
    title: "UX review presentations",
    content:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    datePublished: "20 Jan 2022",
    author: {
      name: "Olivia Rhye",
      profilePic: "image1",
    },
  },
  {
    image: "image2",
    category: "Product",
    title: "Migrating to Linear 101",
    content:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    datePublished: "19 Jan 2022",
    author: {
      name: "Phoenix Baker",
      profilePic: "image2",
    },
  },
  {
    image: "image3",
    category: "Software Engineering",
    title: "Building your API Stack",
    content:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    datePublished: "18 Jan 2022",
    author: {
      name: "Lana Steiner",
      profilePic: "image3",
    },
  },
  {
    image: "image4",
    category: "Management",
    title: "Bill Walsh leadership lessons",
    content:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    datePublished: "17 Jan 2022",
    author: {
      name: "Alec Whitten",
      profilePic: "image4",
    },
  },
  {
    image: "image5",
    category: "Product",
    title: "PM mental models",
    content:
      "Mental models are simple expressions of complex processes or relationships.",
    datePublished: "16 Jan 2022",
    author: {
      name: "Demi WIlkinson",
      profilePic: "image5",
    },
  },
  {
    image: "image6",
    category: "Design",
    title: "What is Wireframing?",
    content:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    datePublished: "15 Jan 2022",
    author: {
      name: "Candice Wu",
      profilePic: "image6",
    },
  },
  {
    image: "image7",
    category: "Design",
    title: "How collaboration makes us better designers",
    content:
      "Collaboration can make our teams stronger, and our individual designs better.",
    datePublished: "14 Jan 2022",
    author: {
      name: "Natali Craig",
      profilePic: "image7",
    },
  },
  {
    image: "image8",
    category: "Product",
    title: "Our top 10 Javascript frameworks to use",
    content:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    datePublished: "13 Jan 2022",
    author: {
      name: "Drew Cano",
      profilePic: "image8",
    },
  },
  {
    image: "image9",
    category: "Customer Success",
    title: "Podcast: Creating a better CX Community",
    content:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    datePublished: "12 Jan 2022",
    author: {
      name: "Orlando Diggs",
      profilePic: "image9",
    },
  },
];

function publishBlogPosts() {
    const blogSection = document.querySelector(".main-content > .container.grid");

    let allBlogPosts = ''


    for(let i = 0; i < posts.length; i++) {

        postTemplate = `
                <div class="card">
                <img src="./images/${posts[i].image}.jpg" alt="">
                <div>
                    <div>
                        <p class="category">${posts[i].category}</p>
                        <div class="title">
                            <p>${posts[i].title}</p>
                            <img src="./images/Icon wrap.jpg" alt="">
                        </div>
                        <p class="text">${posts[i].content}</p>
                    </div>
                    
                    <div class="avatar">
                        <img src="./images/${posts[i].author.profilePic}.jpg" alt="">
                        <div>
                            <p>${posts[i].author.name}</p>
                            <p>${posts[i].datePublished}</p>
                        </div>
                    </div>
                </div>              
            </div>
        `;

        allBlogPosts += postTemplate

    }

    blogSection.innerHTML = allBlogPosts

}

publishBlogPosts()