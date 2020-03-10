import React from "react";
import useFileHandlers from "./useFileHandlers";
import "./App.css";

const Input = props => (
  <input
    type="file"
    accept="txt/*"
    name="txt-loader-input"
    multiple
    {...props}
  />
);

const App = () => {
  const {
    files,
    pending,
    next,
    uploading,
    uploaded,
    status,
    onSubmit,
    onChange
  } = useFileHandlers();

  return (
    <div className="container">
      <form className="form" onSubmit={onSubmit}>
        {status === "FILES_UPLOADED" && (
          <div className="success-container">
            <div>
              <h2>Upload was successful</h2>
              <small>You uploaded resume.</small>
            </div>
          </div>
        )}
        <div>
          <Input onChange={onChange} />
          <button type="submit">Submit</button>
        </div>
        <div>
          {files.map(({ file, src, id }, index) => (
            <div
              style={{
                opacity: uploaded[id] ? 0.2 : 1
              }}
              key={`thumb${index}`}
              className="thumbnail-wrapper"
            >
              <div className="thumbnail-caption">
                <div className="resume-selector">
                  <label>Prefered Resume</label>
                  <ul>
                    <input type="radio" />
                    {file.name}
                    <br />
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default App;
