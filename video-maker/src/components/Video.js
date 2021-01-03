import React from "react";
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }) => {
    return (
        <div>
            <div {...dropzoneProps}>
                {files.length < maxFiles && input}
            </div>
            {previews}

            {files.length > 0 && submitButton}
        </div>
    )
}

const SimpleDropZone = () => {

    // Payload data and url to upload files
    const getUploadParams = ({ file }) => {
        const body = new FormData();
        body.append('file', file);
        console.log(body);
        return { url: 'https://lets-rewind-api.herokuapp.com/convert', body }
    }

    // Return the current status of files being uploaded
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // Return array of uploaded files after submit button is clicked
    // const handleSubmit = (files, allFiles) => {
    //     console.log(files.map(f => f.meta))

    // }

    return (
        <div className="main">
            <div className="left" >
                <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    // onSubmit={handleSubmit}
                    accept="image/*"
                    inputContent="Drag or Drop Images"
                    styles={{
                        dropzone: { width: "75%", height: 200, marginTop: 30, overflow: "hidden", textAlign: 'center', textColor: 'white' },
                        submitButtonContainer: { textAlign: 'center' },
                    }}
                    LayoutComponent={Layout}
                />
            </div>
            <div className="right">
                <div className="instructions">
                    <h1>instructions</h1>
                </div>
            </div>

        </div>

    );
};

export default SimpleDropZone;