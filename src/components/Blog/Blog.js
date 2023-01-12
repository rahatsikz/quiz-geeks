import React from "react";

const Blog = () => {
  return (
    <div className="bg-slate-100 h-[93vh]">
      <div className="w-4/5 xl:w-1/2 mx-auto p-12">
        <p className="text-center mb-4 text-xl font-bold">
          Question and Answer
        </p>

        <div className="collapse collapse-arrow">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-white text-stone-500 peer-checked:bg-white peer-checked:text-stone-500">
            What is the purpose of react router?
          </div>
          <div className="collapse-content bg-indigo-400 my-4 text-primary-content peer-checked:bg-indigo-400 peer-checked:text-secondary-content">
            <p className="pt-3">
              The primary goal of Router in React JS is to supply the browser
              with an asynchronous URL that corresponds to the data that will
              show on the web page. It is mainly used to create single-page web
              apps since it retains the application's regular structure and
              functionality.The Router in React JS is primarily used to create
              Single Page Web Apps. In the application, React Router is utilized
              to define various routes. When a user enters a URL into your
              browser and the URL route equals one of several 'pathways' as in
              the router folder, the user is sent to that route.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-white text-stone-500 peer-checked:bg-white peer-checked:text-stone-500">
            How does context api work?
          </div>
          <div className="collapse-content bg-indigo-400 my-4 text-primary-content peer-checked:bg-indigo-400 peer-checked:text-secondary-content">
            <p className="pt-3">
              The Context API helps share data between components which you
              can't easily share with props, for example, complex data objects.
              React Context API provides a way to send data like userid, auth,
              and theme data through the component tree without sending any
              props manually at every level.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-white text-stone-500 peer-checked:bg-white peer-checked:text-stone-500">
            What is the use of useRef?
          </div>
          <div className="collapse-content bg-indigo-400 my-4 text-primary-content peer-checked:bg-indigo-400 peer-checked:text-secondary-content">
            <p className="pt-3">
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.The useRef returns a mutable ref object. This object has
              a property called .current. The value is persisted in the
              refContainer.current property. These values are accessed from the
              current property of the returned object. The .current property
              could be initialised to the passed argument initialValue e.g.
              useRef(initialValue). The object can persist a value for a full
              lifetime of the component.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
