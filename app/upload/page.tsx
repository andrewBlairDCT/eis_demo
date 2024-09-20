"use client";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);

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
    setFiles(selectedFiles);
  };

   const handleUploadS3 = async (e: any) => {
     if (files.length === 0) {
      alert('Please select a file to upload.')
      return
    }
    try {
      const uploadPromises = files.map(async (file) => {
        const ext = file.name.split(".").at(-1);
        const uid = uuidv4().replace(/-/g, "");
        const fileName = `${uid}${ext ? "." + ext : ""}`;

        const uploadToS3 = new PutObjectCommand({
          Bucket,
          Key: fileName,
          Body: file,
        });
        await s3.send(uploadToS3);
      });

      await Promise.all(uploadPromises);
      alert('Files uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert(`Error uploading: ${error}`);
    }
  };



  return (
    <Fragment>
      <div>
        <div>
          <div>
            <div>
              <input
                type="file"
                id="image-upload"
               
                accept=".png, .jpg, .jpeg"
                onChange={handleUploadLocalFile}
                multiple
              />
            </div>
          </div>
          <div>
            <button style={{zIndex: 12, position: 'relative', border: 'solid 1px white', padding: 5}} 
            onClick={handleUploadS3}>S3 Upload</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Upload;