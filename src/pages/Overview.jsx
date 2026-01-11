import '../styles/Overview.css';
import { useState, useEffect } from "react";
import { study } from "../data/study";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { techLanguages } from "../data/techLanguages";
import { techFrameworks } from "../data/techFrameworks";
import { iconMap } from "../data/iconMap";



const Overview = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    if (selectedProject) {
      // 모달 열릴 때 스크롤 비활성화
      document.body.style.overflow = "hidden";
    } else {
      // 모달 닫힐 때 다시 스크롤 가능하게
      document.body.style.overflow = "auto";
    }

    // cleanup: 컴포넌트가 언마운트될 때 스크롤 복원
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const getTechIcon = (lang) => {
    const key = lang.toLowerCase().replace(/[\s.]/g, "");
    const fileName = iconMap[key] || iconMap.default;
    return `/Logos/${fileName}`;
  };


  return (
    <main className="overview-container">
      {/* ===== 1. 자기소개 섹션 ===== */}
      <section id="intro" className="section intro-section">
        <div className="intro-wrapper">
          {/* 왼쪽: 프로필 이미지 */}
          <div className="intro-photo">
            <img src="/profile2.png" alt="김소정 프로필" />
          </div>

          {/* 오른쪽: 텍스트 */}
          <div className="overview-text">
            <h1>
              안녕하세요, 개발자 <span className="highlight">김소정</span>입니다.
            </h1>

            {/* 어떤 개발자가 되고 싶은지 */}
            <p className="intro-subtext">
              기술로 사람의 일상을 더 편리하고 즐겁게 만드는 개발자가 되고 싶습니다.
              데이터와 디자인을 함께 이해하며 문제를 해결하는 것이 제 강점입니다.
            </p>

            {/* 이력서 다운로드 버튼 */}
            <a href="/김소정_이력서.pdf" download className="resume-btn">
              이력서 다운로드
            </a>
          </div>
        </div>

        {/* 자기소개 카드 */}
        <div className="overview-text">
          <h2>핵심 역량</h2>
          <h1>저는 이런 사람입니다.</h1>
          <div className="intro-card-container">
            <div className="intro-card">
              <h3>문제 해결 중심</h3>
              <p>새로운 기술을 배울 때 ‘왜’와 ‘어떻게’를 고민하며, 효율적인 해결책을 찾습니다.</p>
            </div>
            <div className="intro-card">
              <h3>협업을 즐김</h3>
              <p>팀 내 소통과 코드 리뷰를 통해 함께 성장하는 개발 문화를 지향합니다.</p>
            </div>
            <div className="intro-card">
              <h3>꾸준한 성장</h3>
              <p>작은 프로젝트라도 완성해보며 경험을 쌓고, 매일 기록하며 발전합니다.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== 2. 기술(Tech) 섹션 ===== */}
      <section id="tech" className="section tech-section">
        <div className="overview-text">
          <h2>보유 기술</h2>
          <h1>아래 기술을 사용할 수 있습니다.</h1>
        </div>

        <div className="tech-wrapper">
          {/* 프로그래밍 언어 숙련도 */}
          <div className="tech-box">
            <h2>▶︎ 프로그래밍 언어 숙련도</h2>
            {techLanguages.map((group, index) => {
              const dotClass =
                group.level.includes("입문") ? "beginner" :
                  group.level.includes("초급") ? "intermediate" :
                    "advanced";

              return (
                <div key={index} className="tech-level">
                  <div className="level-header">
                    <span className={`level-dot ${dotClass}`}></span>
                    <h3>{group.level}</h3>
                  </div>
                  <p className="description">{group.description}</p>

                  <div className="tech-icons">
                    {group.items.map((lang, i) => (
                      <div key={i} className="tech-item">
                        <img src={getTechIcon(lang)} alt={lang} />
                        <span>{lang}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 프레임워크 및 툴 */}
          <div className="tech-box">
            <h2>▶︎ 사용 경험 있는 프레임워크 · 툴</h2>
            {techFrameworks.map((group, index) => (
              <div key={index} className="framework-category">
                <h3>{group.category}</h3>
                <div className="tech-icons">
                  {group.items.map((tool, i) => (
                    <div key={i} className="tech-item">
                      <img src={getTechIcon(tool)} alt={tool} />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. 경력(Career) 섹션 ===== */}
      <section id="career" className="section career-section">
        <div className="overview-text">
          <h2>경험</h2>
          <h1>이러한 경험을 해본 적 있습니다.</h1>
        </div>
        <div className="study-container">
          {experience.map((section) => (
            <div key={section.id} className="study-category">
              {/* <h2>{section.category}</h2> */}
              {section.items.map((item, index) => (
                <div key={index} className="study-item">
                  <p className="period">{item.period || item.date}</p>
                  <h4 className="title">{item.school || item.name}</h4>
                  {item.major && <p className="major">{item.major}</p>}
                  {item.level && <p className="level">{item.level}</p>}
                  {item.score && <p className="score">{item.score}</p>}
                  {item.details && (
                    <ul>
                      {item.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===== 4. 프로젝트(Project) 섹션 ===== */}
      <section id="project" className="section project-section">
        <div className="overview-text">
          <h2>프로젝트</h2>
          <h1>진행한 주요 프로젝트입니다.</h1>
        </div>

        {/* ===== 프로젝트 카드 리스트 ===== */}
        <div className="project-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card" onClick={() => openModal(p)}>
              <p className="project-type">{p.type}</p>
              {/* <p className="project-period">{p.period}</p> */}
              <div className="project-title">{p.title}</div>

              <p className="project-summary">{p.role}</p>
              <div className="tech-list">
                {p.techStack.slice(0, 4).map((tech, i) => (
                  <div key={i} className="tooltip-wrapper">
                    <img src={getTechIcon(tech)} alt={tech} className="project-tech-icon" />
                    <span className="tooltip-text">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ===== 모달 ===== */}
        <div
          className={`modal-overlay ${selectedProject ? "active" : ""}`}
          onClick={closeModal}
        >
          {selectedProject && (
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>{selectedProject.title}</h3>
              <p className="period">{selectedProject.period}</p>
              <p><strong>역할:</strong> {selectedProject.role}</p>
              <p><strong>사용 기술:</strong> {selectedProject.techStack.join(", ")}</p>
              <h4>주요 활동</h4>
              <ul>
                {Object.values(selectedProject.sections)
                  .flat()
                  .map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
              </ul>
              <button className="close-btn" onClick={closeModal}>
                닫기
              </button>
            </div>
          )}
        </div>



      </section>

      {/* ===== 5. 교육 및 어학(Study) 섹션 ===== */}
      <section id="study" className="section study-section">
        <div className="overview-text">
          <h2>교육 및 어학</h2>
        </div>
        <div className="study-container">
          {study.map((section) => (
            <div key={section.id} className="study-category">
              {/* <h2>{section.category}</h2> */}
              {section.items.map((item, index) => (
                <div key={index} className="study-item">
                  <p className="period">{item.period || item.date}</p>
                  <h4 className="title">{item.school || item.name}</h4>
                  {item.major && <p className="major">{item.major}</p>}
                  {item.level && <p className="level">{item.level}</p>}
                  {item.score && <p className="score">{item.score}</p>}
                  {item.details && (
                    <ul>
                      {item.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Overview;
