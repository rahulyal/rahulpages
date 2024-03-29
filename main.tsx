/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Rahul Yal",
  description: "My personal space on the Internet",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  // https://deno-avatar.deno.dev/avatar/blog.svg
  avatar: "img_white_crop.svg",
  avatarClass: "rounded-full",
  author: "Rahul Yal",
  links: [
    { title: "Email", url: "mailto:vyalavarthi@scu.edu" },
    { title: "GitHub", url: "https://github.com/rahulyal" },
  ]

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
