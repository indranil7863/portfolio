import ProjectCard from "../components/ProjectCard";
import DemoProjectImg from "../../../../public/images/demo-project-image.png";
import TodoImg from "../../../../public/images/todoImg.jpg";
import StonePaperImg from "../../../../public/images/stone-paper-scissorimg.jpg";
import KruskalsAlgoImg from "../../../../public/images/kruskalsImg.png";

function page() {
  return (
    <div className="flex flex-col justify-center items-center lg:w-[80%] mx-auto py-4">
      <h1 className="lg:text-5xl text-3xl text-center tracking-wide relative font-bold py-4 bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Projects
        <span
          className="absolute inset-x-0 bottom-0 h-0.5 
              bg-linear-to-r from-transparent via-blue-500 to-transparent"
        ></span>
      </h1>

      <section className="flex justify-center items-center flex-col gap-4 pb-8">
        <p className="dark:text-white text-[#333333]  text-2xl lg:text-start text-center w-full font-bold ">
          Mega Projects
        </p>
        <div className="flex lg:flex-row flex-col justify-center gap-8">
          <ProjectCard
            srcImg={DemoProjectImg}
            projectTitle="Quizlet | A Modern Quiz Website"
            projectDesc="  A dynamic, fully responsive quiz platform built with React.js and
          Tailwind CSS. Features real-time score tracking, categorized question
          sets, and an interactive UI designed for seamless user engagement
          across all devices."
            srcLink="/"
          />
          <ProjectCard
            srcImg={DemoProjectImg}
            srcLink="/"
            projectTitle="MyDrive | Cloud Based Storage App"
            projectDesc="Engineered a full-stack cloud storage platform utilizing PostgreSQL to architect a robust relational schema for secure file and folder management. I leveraged Next.js and Tailwind CSS to deliver a high-performance, responsive interface that prioritises 
            seamless data integrity and efficient file operations"
          />
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 pb-8">
        <p className="text-white text-2xl lg:text-start text-center w-full font-bold">
          Mini Projects
        </p>
        <div className="flex lg:flex-row flex-col justify-center gap-8">
          <ProjectCard
            srcImg={TodoImg}
            srcLink="https://todoapp-contextapi.netlify.app/"
            newTab="_blank"
            projectTitle="Todo | List Daily Tasks"
            projectDesc="Developed a high-performance Task Management application using React and Tailwind CSS to master complex state transitions and persistent data handling. I focused on building an intuitive, mobile-first interface"
          />
          <ProjectCard
            srcImg={StonePaperImg}
            projectTitle="Stone-Paper-Scissor Game"
            srcLink="https://696b20d2dd90df276d0e80fc--storied-stroopwafel-5630fa.netlify.app/"
            newTab="_blank"
            projectDesc="Developed a fully interactive Rock Paper Scissors game utilizing Vanilla JavaScript to master DOM manipulation and conditional game logic. I leveraged Tailwind CSS to engineer a high-fidelity interface featuring dynamic state updates, responsive layouts, and smooth micro-interactions that enhance the overall user experience."
          />
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 pb-8">
        <p className="text-white text-2xl lg:text-start text-center w-full font-bold">
          Articles
        </p>
        <div className="flex lg:flex-row flex-col justify-center gap-8 ">
          <ProjectCard
            srcImg={KruskalsAlgoImg}
            projectTitle="Kruskal's Algorithm"
            projectDesc="Kruskal's algorithm is a greedy approach used to find the Minimum Spanning Tree (MST) of a connected, weighted graph by sorting all edges from least to greatest weight."
            srcLink="https://medium.com/p/28387a659cc1?postPublishedType=initial"
            newTab="_blank"
          />
          <ProjectCard
            srcImg={StonePaperImg}
            projectTitle="Stone-Paper-Scissor Game"
            projectDesc="Developed a fully interactive Rock Paper Scissors game utilizing Vanilla JavaScript to master DOM manipulation and conditional game logic. I leveraged Tailwind CSS to engineer a high-fidelity interface featuring dynamic state updates, responsive layouts, and smooth micro-interactions that enhance the overall user experience."
            srcLink="/"
          />
        </div>
      </section>
    </div>
  );
}

export default page;
