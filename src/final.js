import React, { useState,useEffect } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import log from "./logo1.png";
import { MdOutlineCloudUpload,MdPause, MdPlayArrow } from "react-icons/md";
import video from "./final video poc-1.mp4"
import './App.css';
import log1 from "./sample1.jpg";
import log2 from "./sample2.jpg"
import log3 from "./sample6.jpg"
import log4 from "./sample4.jpg"
import log5 from "./adv1.png"
import log6 from "./3-removebg-preview.png"
import log7 from "./adv2.png"
=======
import log from "./images/logo1.png";
import { MdOutlineCloudUpload,MdPause, MdPlayArrow } from "react-icons/md";

import './App.css';
import log1 from "./images/sample1.jpg";
import log2 from "./images/sample2.jpg"
import log3 from "./images/sample6.jpg"
import log4 from "./images/sample4.jpg"
import log5 from "./images/adv1.png"
import log6 from "./images/adv3.png"
import log7 from "./images/adv2.png"
>>>>>>> f97e4897c1a3b55a6f230a707608a3738c68aad2
const MAX_FILE_SIZE_MB = 200;
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

const sampleImages = [
  {
    url: log1,
    type: 'image/jpeg',
    size: 100000,
    alt: 'image1', 
  },
  {
    url: log2,
    type: 'image/png',
    size: 150000,
    alt: 'image2',
  },
  {
    url: log3,
    type: 'image/jpeg',
    size: 180000,
    alt: 'image3',
  },
  {
    url: log4,
    type: 'image/jpeg',
    size: 120000,
    alt: 'image4',
  },
];


const App = () => {
<<<<<<< HEAD
=======
  const videoUrl = 'https://nvisionai-video.s3.amazonaws.com/final+video+poc-1.mp4'
>>>>>>> f97e4897c1a3b55a6f230a707608a3738c68aad2
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [apiImage, setApiImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTab, setSelectedTab] = useState("product"); 
  const [isDragging, setIsDragging] = useState(false);
  const [typingAnimation, setTypingAnimation] = useState(false);
  const [activeButton, setActiveButton] = useState("product");
<<<<<<< HEAD
=======
  const [uploadStatus, setUploadStatus] = useState('Upload an image...');
>>>>>>> f97e4897c1a3b55a6f230a707608a3738c68aad2

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (validateFile(file)) {
      setSelectedImage(file);
      setApiImage(null);
    } else {
      alert('Please choose a valid image file (jpg, jpeg, or png) under 200MB.');
    }
  };

  const validateFile = (file) => {
    if (!file) {
      return false;
    }
    const isFileTypeValid = ALLOWED_FILE_TYPES.includes(file.type);
    const isFileSizeValid = file.size / (1024 * 1024) <= MAX_FILE_SIZE_MB;

    return isFileTypeValid && isFileSizeValid;
  };
  
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnd = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];

    if (validateFile(file)) {
      setSelectedImage(file);
    } else {
      alert('Please choose a valid image file (jpg, jpeg, or png) under 200MB.');
    }
  };
<<<<<<< HEAD
  const baseUrl = "http://127.0.0.1:8000";
=======
  const baseUrl = "https://crfcdivauy7cwfysg23oqojl6u0jrsmd.lambda-url.ap-south-1.on.aws";
>>>>>>> f97e4897c1a3b55a6f230a707608a3738c68aad2

  const handleFetchImage = async () => {
    try {
      if (!selectedImage) {
        setError('Please select an image.');
        return;
      }

      setLoading(true);
      setError(null);
<<<<<<< HEAD
      const formData = new FormData();
      formData.append('image', selectedImage);
      const response = await axios.post(`${baseUrl}/upload-image`, formData);
  
      console.log(response.data); 
=======
      setUploadStatus('Uploading an image...');
      const formData = new FormData();
      formData.append('image', selectedImage);
      const response = await axios.post(`${baseUrl}/upload-image`, formData);

      const { classification_result, detection_plot_url, labels_with_confidence } = response.data;

>>>>>>> f97e4897c1a3b55a6f230a707608a3738c68aad2
      const uploadedImageDetails = {
        id: 1,
        url: URL.createObjectURL(selectedImage),
        alt: 'Uploaded Image',
        description: 'Image uploaded successfully',
      };
<<<<<<< HEAD
  
      const outputImageDetails = {
        id: 2,
        url: `${baseUrl}${response.data.detection_plot_url}?timestamp=${new Date().getTime()}`,
        alt: 'AI Result',
        description: response.data.classification_result,
        labelsWithConfidence: response.data.labels_with_confidence,
      };
      
  
    setApiImage([uploadedImageDetails, outputImageDetails]);
    } catch (error) {
      console.error('Error fetching image:', error);
      console.error('Error Details:', error.response);
    }finally {
=======
     
      const outputImageDetails = {
        id: 2,
        url: `${baseUrl}${detection_plot_url}?timestamp=${new Date().getTime()}`,
        alt: 'AI Result',
        description: classification_result,
        labelsWithConfidence: labels_with_confidence,
      };

      setApiImage([uploadedImageDetails, outputImageDetails]);
      setUploadStatus('Image uploaded successfully');
    } catch (error) {
      console.error('Error fetching image:', error);
      console.error('Error Details:', error.response);
      setError('Error uploading image. Please try again.');
    } finally {
>>>>>>> f97e4897c1a3b55a6f230a707608a3738c68aad2
      setLoading(false);
    }
  };

  const handleClear = () => {
    setSelectedImage(null);
    setApiImage(null);
    setError(null);
  };

  useEffect(() => {
    if (apiImage && apiImage.length > 1) {
      setTypingAnimation(true);

      setTimeout(() => {
        document.getElementById('result-container').scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 1000);
    }
  }, [apiImage]);

  useEffect(() => {
    if (apiImage && apiImage.length > 1) {
      setTypingAnimation(true);

<<<<<<< HEAD
   
=======
>>>>>>> f97e4897c1a3b55a6f230a707608a3738c68aad2
      setTimeout(() => {
        document.getElementById('result-container').scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 1000);
    }
 
    return () => {
      document.body.classList.remove('typing-animation-active');
    };
  }, [apiImage]);

  const handlePauseResume = () => {
    const videoElement = document.getElementById('main-video');

    if (videoElement) {
      if (videoPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }

      setVideoPlaying(!videoPlaying);
    }
  };
 
<<<<<<< HEAD
    

  return (
    <div className={`app-container ${typingAnimation ? 'typing-animation-active' : ''}`}>
      <div className='heading'>
        <h1>Nvision AI</h1>
      </div>
      <img src={log} alt="logo" className='logo' />
      <p className='description'>A Tool for <span className='description1'>Automatic Identification of Products and Defects using Computer Vision </span> to enhance process efficiency and productivity.</p>
      
      <div className="video-container1">
        <video
          id="main-video"
          src={video}
=======
  return (
    <div className={`app-container ${typingAnimation ? 'typing-animation-active' : ''}`}>
      <div className='main-heading'>
        <h1>Nvision AI</h1>
      </div>
      <img src={log} alt="logo" className='company-logo' />
      <p className='description'>A Tool for <span className='description1'>Automatic Identification of Products and Defects using Computer Vision </span> to enhance process efficiency and productivity.</p>
      
      <div className="video-container">
        <video
          id="main-video"
          src={videoUrl}
>>>>>>> f97e4897c1a3b55a6f230a707608a3738c68aad2
          type="video/mp4"
          className='videos'
          
          controls={false} 
          onClick={handlePauseResume} 
        />
<<<<<<< HEAD
        <div className="video-controls1" >
=======
        <div className="video-controls" >
>>>>>>> f97e4897c1a3b55a6f230a707608a3738c68aad2
          {videoPlaying ? (
            <MdPause onClick={handlePauseResume} className='control-icon1' />
          ) : (
            <MdPlayArrow onClick={handlePauseResume} className='control-icon1' />
          )}
        </div>
      </div>
<<<<<<< HEAD
      <div className='advantages'>
        <h2>Features of this Product</h2>
        <div className='adv'>
          <div className='adv1'>
            <img src={log6} alt="adv" className='adv-images1'/>
            <p className='par'>Automatic identification of the product.</p>
          </div>
          <div className='adv1'>
          <img src={log5} alt="adv" className='adv-images'/>
          <p className='par'>Efficiently identifies and categorizes defects found across products.</p>
          </div>
          <div className='adv1'>
          <img src={log7} alt="adv" className='adv-images'/>
          <p className='par'>Improved efficiency with reduced processing time.</p>
          </div>
        </div>
      </div>
      <h2 className='ai'>Let <span className='demo'>Nvision AI </span>accelerate your business growth ,Try Validating!</h2>
      <div className='demo-cont'>
      <div className='app'>
      <h3> Upload an image...</h3>
=======

      <div className='advantages-container'>
        <h2>Features of this Product</h2>
        <div className='adv'>
          <div className='adv1'>
            <img src={log6} alt="adv" className='adv-images'/>
            <p className='adv-par'>Automatic identification of the product.</p>
          </div>
          <div className='adv1'>
          <img src={log5} alt="adv" className='adv-images'/>
          <p className='adv-par'>Efficiently identifies and categorizes defects found across products.</p>
          </div>
          <div className='adv1'>
          <img src={log7} alt="adv" className='adv-images'/>
          <p className='adv-par'>Improved efficiency with reduced processing time.</p>
          </div>
        </div>
      </div>

      <div className='test-heading-container'>
      <h2 className='test-heading'>Let <span className='demo'>Nvision AI </span>accelerate your business growth</h2>
      </div>
      <div className='test-heading-container1'>
      <h2 className='test-heading1'>Try Validating!</h2>
      </div>
      <div className='demo-container'>
        
      <div className='app'>
      
      
      
      <h3>{uploadStatus}</h3>
>>>>>>> f97e4897c1a3b55a6f230a707608a3738c68aad2
      <div className='image-upload-container'>
        <div
          className={`upload-container ${isDragging ? 'dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragEnd}
          onDrop={handleDrop}
        >
        <div className='drop-zone'>
          <div className='upload-icon'>
          <MdOutlineCloudUpload />
          </div>
          <div className='drop-container'>
            <p className='pa'>{selectedImage ? selectedImage.name : 'Drag and drop image here '}</p>
            <p className='paragraph'>{selectedImage ? "" : 'Limit 200mb per file. JPG,PNG,JPEG'}</p>
          </div>
        </div>
      </div>
      <label className='browse-button'>
            Browse
          <input type="file" className='input' onChange={handleImageUpload} style={{ display: 'none' }} />
      </label>
       </div><h3>Sample Images...</h3>
      <div className='sample-image'>
          {sampleImages.map((sample, index) => (
            <div
              key={index} onClick={() => handleImageUpload(new File([{}], sample.name, { type: sample.type, size: sample.size }))} >
              <img src={sample.url} alt={sample.alt} className='sample'/>
            </div>
          ))}
        </div>
        <button onClick={handleFetchImage}>Upload and Run</button>
        <button onClick={handleClear}>Clear</button></div> 
        {loading && <p>Loading...</p>}
<<<<<<< HEAD
=======
        
>>>>>>> f97e4897c1a3b55a6f230a707608a3738c68aad2
  {error && <p style={{ color: 'red' }}>{error}</p>}
      <div id="result-container" className={`result-container ${typingAnimation ? 'typing-animation' : ''}`}>
        <div className='input-image'>
          {apiImage && apiImage.length > 0 && (
            <div className='input'>
              <button className= 'active' >
          Input
        </button>
        <hr className='hr-line'/>
              <img src={apiImage[0].url} alt={apiImage[0].alt} className="result-image" />
            </div>
          )}
        </div>

        {apiImage && apiImage.length > 1 && (
          <div className='output-container'>
<<<<<<< HEAD
=======
            
>>>>>>> f97e4897c1a3b55a6f230a707608a3738c68aad2
            <div className='output-buttons'>
        <button
          className={activeButton === "product" ? 'active' : ''}
          onClick={() => {
            setSelectedTab("product");
            setActiveButton("product");
          }}
        >
          Product Name
        </button>
        <button
          className={activeButton === "imageDetection" ? 'active' : ''}
          onClick={() => {
            setSelectedTab("imageDetection");
            setActiveButton("imageDetection");
          }}
        >
          Defects Identification
        </button>
        <button
          className={activeButton === "defectDetection" ? 'active' : ''}
          onClick={() => {
            setSelectedTab("defectDetection");
            setActiveButton("defectDetection");
          }}
        >
          Defects categorization
        </button>
      </div>
            <hr className='hr-line'/>
            <div >
              <div className='output-content'>
              {selectedTab === "product" && (
                <>
                  
                  <p className={`result-description ${typingAnimation ? 'typing-animation' : ''}`}>
                    {apiImage[1].description}
                  </p>
                </>
              )}</div>

              {selectedTab === "imageDetection" && (
                <>
                  
                  <img src={apiImage[1].url} alt={apiImage[1].alt} className="result-image" />
                </>
              )}
              {selectedTab === "defectDetection" && (
<<<<<<< HEAD
                <>
                  
                  <ul className='labels'>
                    {apiImage[1].labelsWithConfidence &&
                      apiImage[1].labelsWithConfidence.map((label, index) => (
                        <li key={index} className='label'>{label}</li>
                      ))}
                  </ul>
                </>
              )}
=======
  <>
    {apiImage[1].labelsWithConfidence && apiImage[1].labelsWithConfidence.length > 0 ? (
      <ul className='labels'>
        {apiImage[1].labelsWithConfidence.map((label, index) => (
          <li key={index} className='label'>{label.charAt(0).toUpperCase() + label.slice(1)}</li>
        ))}
      </ul>
    ) : (
      <p className='result-description'>No defects found</p>
    )}
  </>
)}
>>>>>>> f97e4897c1a3b55a6f230a707608a3738c68aad2
            </div>
          </div>
        )}
</div>
</div>
    </div>
  );
};

export default App;
