import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import StudyPlanPage from "./pages/StudyPlanPage/StudyPlanPage";
import InterviewPage from "./pages/InterviewPage/InterviewPage";
import SelfAssessmentPage from "./pages/SelfAssessmentPage/SelfAssessmentPage";
import KnowledgeMapPage from "./pages/KnowledgeMapPage/KnowledgeMapPage";
import InterviewExperiencePage from "./pages/InterviewExperiencePage/InterviewExperiencePage";
import PrinciplesPage from "./pages/PrinciplesPage/PrinciplesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="study-plan" element={<StudyPlanPage />} />
        <Route path="interview" element={<InterviewPage />} />
        <Route path="self-assessment" element={<SelfAssessmentPage />} />
        <Route path="knowledge-map" element={<KnowledgeMapPage />} />
        <Route path="interview-experience" element={<InterviewExperiencePage />} />
        <Route path="principles" element={<PrinciplesPage />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}
