import React from "react";
import { FileUpload } from "primereact/fileupload";
class Dashboard extends React.Component {
  myUploader(event) {
    //event.files == files to upload
  }
  render() {
    return (
      <div>
        <h3>Dashboard</h3>
        <FileUpload
          name="demo[]"
          url="/upload"
          customUpload
          auto={false}
          uploadHandler={this.myUploader}
          multiple
          accept="image/*"
          maxFileSize={1000000}
          emptyTemplate={
            <p className="p-m-0">Drag and drop files to here to upload.</p>
          }
        />
      </div>
    );
  }
}

export default Dashboard;
