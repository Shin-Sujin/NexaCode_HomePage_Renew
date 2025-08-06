
    // Select the word to animate (marked with the 'rotating-word' class)
        const rotatingWord = animatedText.querySelector(".rotating-word");
      
        if (!rotatingWord) {
          console.error("No word found with the 'rotating-word' class.");
          return;
        }
      
        // Apply GSAP animation to the rotating word
        gsap.fromTo(
          rotatingWord,
          {
            rotation: -75, // Start rotated 90 degrees
            y: -80, // Start above its final position
            opacity: 0, // Start invisible
          },
          {
            scrollTrigger: {
              trigger: animatedText, // Trigger animation on this element
              start: "top 85%", // Start when the section is 85% in view
              toggleActions: "play none none reset", // Reset animation when user scrolls away
            },
            rotation: 0, // Rotate to its correct position
            y: 0, // Move into place
            opacity: 1, // Fade in
            ease: "bounce.out", // Add a bounce effect as it lands
            duration: 1.5, // Total animation duration
          }
        );

export const text = {
    <section className="container-fluid vh-100 d-flex align-items-center justify-content-center position-relative effect-section" data-effect="rotate-bounce">
          <button className="btn btn-light position-absolute top-0 end-0 m-3 copy-btn">Copy Code</button>
          <div className="row w-100">
            <div className="col-12 text-center">
              <h1 className="animated-text">
                <span className="d-inline-flex">Bounce</span>
                <span className="d-inline-flex rotating-word" style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">This</span>
                <span className="d-inline-flex">Word</span>
                <span className="d-inline-flex">Into</span>
                <span className="d-inline-flex">Place!</span>
              </h1>
            </div>
          </div>
          </section>
}