const JobCard = ({ job }) => {
    return (
      <div>
        <h2>{job.title}</h2>
        <p>{job.description}</p>
        <p>{job.location} - ${job.salary}</p>
        <button>Apply Now</button>
      </div>
    );
  };
  
  export default JobCard;