import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const clientID = "0e04063d252a45bc9767fb7af62085de";
  const clientSecret = "51622fda1f0c4700a924ea39c3339b19";
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.spotify.com/v1/browse/categories", {
        Method: "POST",
        Headers: {
          "content-type": "application/x-www-urlencoded",
          Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",
      });
      const data = await res.json();
      console.log(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-box">
      <h1>غایتنا</h1>
      <p>
        مرحبًا بك في موقعنا للقرآن الكريم! نحن مكرسون لتوفير منصة لقراءة ودراسة
        وتعلم القرآن الكريم. مهمتنا هي تسهيل الوصول إلى القرآن الكريم وجعله
        سهلاً للجميع للتفاعل مع هذا الكتاب المقدس.
      </p>
      <p>
        في موقعنا، يمكنك العثور على مجموعة من الميزات والموارد لمساعدتك في
        استكشاف القرآن والتواصل معه. بعض الميزات الرئيسية تشمل:
      </p>
      <ul>
        <li>
          <Link to="..">الاستماع:</Link> الاستماع إلى تلاوات جميلة للقرآن من قبل
          المقرئين الشهيرين. اختبر الأصوات المؤثرة والإيقاعية للقرآن.
        </li>
        <li>
          <Link to="../tafsir">الدراسة:</Link> الوصول إلى تفاسير القرآن لاكتساب
          رؤى وتفسيرات أعمق. تعرف على الخلفية التاريخية والسياقية للآيات
          المختلفة.
        </li>
        <li>
          <Link to="../contemplativeMoments">وقفات تدبرية:</Link> المشاركة في
          لحظات التأمل والتأمل مع مقاطع فيديو وتلاوات مختارة تسلط الضوء على جمال
          وحكمة القرآن الكريم.
        </li>
      </ul>
      <p>
        نأمل أن يكون موقعنا للقرآن الكريم مصدرًا قيمًا لرحلتك القرآنية. سواء كنت
        مبتدئًا أو متعلمًا متقدمًا، نهدف إلى توفير تجربة سهلة الاستخدام ومثرية
        لتعزيز فهمك وتواصلك مع القرآن الكريم.
      </p>
    </div>
  );
}
