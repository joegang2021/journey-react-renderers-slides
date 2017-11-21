import React from 'react';
import Code from '../components/Code';
import ReactLog from '../static/images/react-log.png';
import Arrow from '../static/images/arrow.png';

const Slide05 = () => (
  <section
    className="flex flex-row mx0 l0 full-width"
    data-bespoke-backdrop="middle-earth-muted"
  >
    <div className="grow-bullet">
      <Code language="html">
        {`<h1 className="title">
            Here be dragons!
          </h1>`}
      </Code>
    </div>
    <div className="ml1 items-center grow-bullet">
      <span className="mr1 fs-45">↠</span>
      <Code language="js">
        {`React.createElement(
            "h1",
            { className: "title" },
            "Here be dragons!"
          );`}
      </Code>
    </div>
    <div className="ml1 relative items-center grow-bullet">
      <span className="mr1 fs-45">↠</span>
      <p
        className="grow-bullet absolute items-end "
        style={{ bottom: '-100px', left: '-30px' }}
      >
        <span className="fs-30" style={{ transform: 'rotate(-6deg)' }}>
          This is plain JS!
        </span>
        <img src={Arrow} style={{ width: 80, marginBottom: 28 }} />
      </p>
      <Code language="js">
        {`{
            type: 'div',
            ref: null,
            key: null,
            props: {
              className: 'title',
              children: 'Here be dragons!'
            }
          }`}
      </Code>
    </div>
  </section>
);

export default Slide05;
