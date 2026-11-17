import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { About } from "./pages/About"
import { Bowlathon, FutureAdmin, NotFound, Practices, SignIn, Team, TeamGear, Tournaments } from "./pages/ComingPages"
import { Contact } from "./pages/Contact"
import { Donate } from "./pages/Donate"
import { Faq } from "./pages/Faq"
import { Fundraisers } from "./pages/Fundraisers"
import { Home } from "./pages/Home"
import { Join } from "./pages/Join"
import { Privacy, Terms } from "./pages/Legal"
import { Resources } from "./pages/Resources"
import { Rules } from "./pages/Rules"
import { Sponsors } from "./pages/Sponsors"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="our-club" element={<Navigate to="/about" replace />} />
        <Route path="join" element={<Join />} />
        <Route path="team" element={<Team />} />
        <Route path="meet-the-bowlers" element={<Navigate to="/team" replace />} />
        <Route path="meet-the-bowlers/:playerId" element={<Navigate to="/team" replace />} />
        <Route path="practices" element={<Practices />} />
        <Route path="tournaments" element={<Tournaments />} />
        <Route path="fundraisers" element={<Fundraisers />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="donate" element={<Donate />} />
        <Route path="resources" element={<Resources />} />
        <Route path="team-gear" element={<TeamGear />} />
        <Route path="faq" element={<Faq />} />
        <Route path="rules" element={<Rules />} />
        <Route path="contact" element={<Contact />} />
        <Route path="volunteer" element={<Navigate to="/contact" replace />} />
        <Route path="bowl-a-thon" element={<Bowlathon />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="admin/*" element={<FutureAdmin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
