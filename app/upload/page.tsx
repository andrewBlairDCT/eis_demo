"use client";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { log } from "console";
import { Fragment, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];

  const Bucket = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;
  const s3 = new S3Client({
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
    },
  });

  const handleUploadLocalFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const filteredFiles = selectedFiles.filter((file) =>
    allowedFileTypes.includes(file.type));

    if (filteredFiles.length !== selectedFiles.length) 
    { 
      alert('Some files are not the required image types. Please choose files again.');
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }

    setFiles(filteredFiles);
  };

   const handleUploadS3 = async (e: any) => {
    e.preventDefault();
     if (files.length === 0) {
      alert('Please select file(s) to upload.')
      return
    }
    try {
      const uploadPromises = files.map(async (file) => {
        // const ext = file.name.split(".").at(-1);
        const uid = uuidv4().replace(/-/g, "");
        const fileName = `${uid}-${file.name}`;
     
        const uploadToS3 = new PutObjectCommand({
          Bucket,
          Key: fileName,
          Body: file,
        });
        await s3.send(uploadToS3);

        const fileUrl = `https://${Bucket}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${fileName}`;
        const originalFileName = file.name
        const last_modified = file.lastModified
        const type = file.type

        const response = await fetch("http://localhost:8000/api/s3-webhook/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            file_name: fileName,
            file_url: fileUrl,
            original_file_name: originalFileName,
            date_last_modified: new Date(last_modified).toISOString(),
            file_type: type
          }),
        });

        if (!response.ok) {
          throw new Error("Uploaded to S3 but failed to send file data to Django");
        }
      });

      await Promise.all(uploadPromises);
      alert('Files uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert(`Error uploading: ${error}`);
    }
  };


  //styling
  const buttonStyling = {
    zIndex: 12, 
    position: 'relative', 
    border: 'solid 1px white',
    padding: 5,
    backgroundColor: 'greynpm',
    margin: 5
  }

  return (
    <Fragment>
      <div>
        <div>
          <div>
            <p>Acceptable file formats: jpg, jpeg, png</p>
            <div>
              <input
                type="file"
                id="image-upload"
                accept=".png, .jpg, .jpeg"
                onChange={handleUploadLocalFile}
                multiple
                ref={fileInputRef}
              />
            </div>
          </div>
          <div>
            <button style={buttonStyling} 
            onClick={handleUploadS3}>S3 Upload</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Upload;