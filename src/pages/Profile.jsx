function Profile() {
  return (
    <div className="content-wrapper">
      <div className="about-profile-card">
        <div className="about-profile-header">
          <h2 className="about-profile-title">About Developer</h2>
          <p className="about-profile-subtitle">Student Information</p>
        </div>

        <div className="profile-info-grid">
          <div className="profile-info-item">
            <div className="profile-info-label">Full Name</div>
            <div className="profile-info-value">สุพิชชา ยืนนาน</div>
          </div>

          <div className="profile-info-item">
            <div className="profile-info-label">Student ID</div>
            <div className="profile-info-value">66010870</div>
          </div>

          <div className="profile-info-item">
            <div className="profile-info-label">Major</div>
            <div className="profile-info-value">ระบบไอโอทีและสารสนเทศ</div>
          </div>

          <div className="profile-info-item">
            <div className="profile-info-label">Faculty</div>
            <div className="profile-info-value">วิศวกรรมศาสตร์</div>
          </div>

          <div className="profile-info-item full-width">
            <div className="profile-info-label">University</div>
            <div className="profile-info-value">
              มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
            </div>
          </div>
        </div>

        <div className="about-footer">
          <div className="footer-divider"></div>
          <p className="footer-text">Drone Monitoring System - web application Project</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;