const articles = [
    {
      name: "learn-react",
      title: "The Fastest Way to Learn React",
      thumbnail: "https://raw.githubusercontent.com/desicoder2021/mern-blog/master/client/public/images/blog1.jpeg",
      content: [
        `Welcome! Today we're going to be talking about the fastest way to learn React. Lorem proin congue ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod.`,
        `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        `Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
      ],
    },
    {
      name: "learn-node",
      title: "How to Build a Node Server in 10 Minutes",
      thumbnail: "data:image/png;base64,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",
      content: [
        `In this article, we're going to be talking looking at a very quick way to set up a Node.js server. We'll be discussing some topics such as proin congue ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod.`,
        `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        `Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
      ],
    },
    {
      name: "my-thoughts-on-learning-react",
      title: "My Thoughts on Learning ReactJS",
      thumbnail: "https://reactjs.org/logo-og.png",
      content: [
        `Today is the day I talk about something which scares most people: Learning ReactJS. In reality, I'm not sure why people have such a hard time with Learning ReactJS ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod.`,
        `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        `Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
      ],
    },
  ];
  export default articles