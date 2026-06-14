import React, { useState, useEffect } from 'react';
import './Project.css';

const Project = () => {
  const projects = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1488521787991-5e359e0c6d2f?w=600&auto=format',
      title: 'Givest - Non Profit',
      category: 'Charity / Fund Rising',
      description: 'Help us change the world with your big hand. Join our mission to support children and make a difference.',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&auto=format',
      title: 'Fusion - Gardening',
      category: 'Gardening / Landscaping',
      description: 'If you have a garden and a library, you have everything you need. 15 years of experience in growing beautiful plants.',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format',
      title: 'SEOLLY - SEO Marketing',
      category: 'SEO / Digital Agency',
      description: 'Top ranking for your brand new website. Learn more about our services and boost your online presence.',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format',
      title: 'TechStart - Startup Kit',
      category: 'Technology / Business',
      description: 'Everything you need to launch your tech startup. Includes templates, guides, and tools.',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1517048676738-d65ab937ac41?w=600&auto=format',
      title: 'EcoLife - Green Living',
      category: 'Environment / Lifestyle',
      description: 'Sustainable living tips and eco-friendly product recommendations for a better planet.',
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format',
      title: 'EduWorld - Online Learning',
      category: 'Education / E-learning',
      description: 'Interactive courses and learning materials for students of all ages. Join thousands of learners.',
    },
  ];

  // groupSize ডায়নামিক – ডেস্কটপ/ট্যাবলেটে ৩, মোবাইলে ১
  const [groupSize, setGroupSize] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  // স্ক্রিন রিসাইজ হ্যান্ডলার
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setGroupSize(1);
      } else {
        setGroupSize(3);
      }
    };

    handleResize(); // প্রথমবার সেট করা
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // groupSize অনুযায়ী প্রোজেক্ট গ্রুপ করা
  const groupedProjects = [];
  for (let i = 0; i < projects.length; i += groupSize) {
    groupedProjects.push(projects.slice(i, i + groupSize));
  }

  // groupSize পরিবর্তন হলে প্রথম স্লাইডে ফিরে যাওয়া
  useEffect(() => {
    setCurrentIndex(0);
  }, [groupSize]);

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? groupedProjects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLast = currentIndex === groupedProjects.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleView = (projectId) => {
    console.log(`View project ${projectId}`);
    // এখানে ডিটেইল পেজে নেভিগেট করতে পারেন
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">My Complete Projects</h2>

      <div className="carousel-container">
        <button className="arrow left" onClick={goToPrevious}>
          &#10094;
        </button>

        <div className="slides-wrapper">
          <div
            className="slides-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {groupedProjects.map((group, idx) => (
              <div key={idx} className="slide">
                <div className="projects-grid">
                  {group.map((project) => (
                    <div key={project.id} className="project-card">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="project-image"
                      />
                      <div className="project-content">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-category">{project.category}</p>
                        <p className="project-description">{project.description}</p>
                        <button
                          className="view-btn"
                          onClick={() => handleView(project.id)}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={goToNext}>
          &#10095;
        </button>

        {groupedProjects.length > 1 && (
          <div className="dots-container">
            {groupedProjects.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;