import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../../components/FadeIn";

const stories = {
  amina: {
    title: "Turning Adversity into Opportunity: The Inspiring Story of Amina Juma",
    subtitle: "amina-jumas-journey",
    date: "October 12, 2023",
    author: "TAGOHEFO Team",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgrY-CNOyUUFogDiW1tIwj34QGVwr4QM-F43F9cVGk40uWZPcGgOMAyP0D35Rehiu8v7giWSQnmV8K9F7CDhdpsEVAAWbE7b6-h-3Njk8uYRJpBw7nroGYouIwpAkG3wl7TQhnhcgFjLogM29IvRwcAbeOZzLlGP1CpEFW6qkuoQ_pMxjof3s2MYKqLQ72Uae3y3rYsnGgMvLdKW0sC04pYR5gbjM9I6YoLC0DUaC2SsNw3gpZzo5kVwlOFqROq14-DrIj7-wMzXk",
    content: [
      "Amina Juma's life was once defined by silence and fear. Trapped in an abusive marriage in a remote village, she felt she had nowhere to turn. \"I thought this was just how life was for women,\" she recalls. \"I didn't know I had rights or options.\"",
      "Everything changed when she met a TAGOHEFO community outreach worker during a local market day. For the first time, she heard about gender-based violence not as a private shame, but as a violation of human rights. With TAGOHEFO's support, Amina accessed legal aid and found safety in a temporary shelter.",
      "But her journey didn't end with escape. Through our economic empowerment programs, Amina learned tailoring and financial literacy. Today, she runs her own small shop and serves as a community mentor. She uses her voice—once silenced—to educate other women about their rights.",
      "\"TAGOHEFO didn't just save my life,\" Amina says with a smile. \"They gave me a new one. Now, I am strong, independent, and I can help others find their strength too.\""
    ]
  },
  elias: {
    title: "From Hardship to Health: Dr. Elias's Unstoppable Mission",
    subtitle: "elias-health-mission-1",
    date: "November 05, 2023",
    author: "TAGOHEFO Team",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPEP5ES5AhrbefwVK_vZckmqicoTp3XkjO4K0L-_Qslp8tcWy3gMakwuuxOD2gsbFPD9x7bgJ2U2LNLM5hcpgBlkXRvNked84E3AHhgzd8H6RMS6az1qDXPx5IC8xJEdThqQrET8NOyKVaWMGZAblgWJlIX3mO6vFzng1LC49JZnNmCOm3okH7JxVNpBcJY_ME4o6T9mkD76VovlIcFvn2zeZPv_70Hyn4L2DrL7aBKD4DOigbir_5UQBH8knvbd1qBTLVymryi6g",
    content: [
      "Dr. Elias M. has always believed that health is the foundation of a thriving community. Working as a Rural Health Officer, he saw firsthand how preventable diseases were devastating families in his district. \"We had the medicines,\" he explains, \"but we didn't have the education. People were getting sick from contaminated water and poor hygiene simply because they didn't know better.\"",
      "Partnering with TAGOHEFO, Dr. Elias launched a series of intensive health awareness workshops. These weren't just lectures; they were interactive sessions involving village elders, mothers, and youth. They covered everything from sanitation and nutrition to maternal health.",
      "The results have been nothing short of remarkable. Within a year, the district reported a 40% drop in waterborne diseases. Vaccination rates for children under five have soared. But for Dr. Elias, the real success is the change in mindset.",
      "\"TAGOHEFO didn't just visit; they stayed,\" he emphasizes. \"They helped us build a system where the community takes ownership of its health. That is true sustainability.\""
    ]
  },
  francisca: {
    title: "Francisca Felix: A Future Reimagined Through Education",
    subtitle: "francisca-felix",
    date: "January 15, 2024",
    author: "TAGOHEFO Team",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBBiOWab0BBIBlteKKh2Yl_Ag2KFk-Zt8hbhRy2XhscjMqIhgPJGZs0_QRiyT3SWJsAxEDy9scqvzGF1CVp74mRCurwmhgOD2e5CQOkMsC10buQ6ahkS6GkQY99QQKIMQQDlh9qkRrPI8CioSeP40GVTEP62BhYPB-FCuUwX8WFXSdXrN0BdU4t5RYZM7O71ZOTOampaQ8TG3PobEp2O00dLAhUV0y5lGX3fubxSG2UjdlimPdM5I5tqJ9a3srBhOJwPj4LgE95xU",
    content: [
      "Growing up, Francisca Felix loved books. But as the eldest of six siblings in a family struggling to make ends meet, her dreams of higher education seemed impossible. \"I was ready to drop out and look for work to help my parents,\" she admits. \"I thought my future was limited.\"",
      "TAGOHEFO's scholarship program identified Francisca's potential and stepped in. The scholarship covered her tuition, books, and uniform, allowing her to focus entirely on her studies. Francisca didn't just pass; she excelled.",
      "Now, Francisca is pursuing a nursing degree at a top university. Her goal is to return to her community and work in the local clinic, providing care to those who cannot afford it. She is also a role model for other young girls, showing them that poverty does not have to define their destiny.",
      "\"I want to give back to the community that saved me,\" Francisca says passionately. \"TAGOHEFO gave me a key to unlock my future. Now, I want to help open doors for others.\""
    ]
  }
};

type Params = Promise<{ slug: string }>;

export default async function StoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const story = stories[slug as keyof typeof stories];

  if (!story) {
    notFound();
  }

  return (
    <main className="flex-1 bg-white pb-20">
      <FadeIn>
        {/* Hero Image */}
        <div className="w-full h-[400px] md:h-[500px] relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${story.image}')` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 text-center text-white">
              <span className="inline-block py-1 px-3 rounded-full bg-primary text-[#111817] text-xs font-bold uppercase tracking-wider mb-6">
                Impact Story
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 font-display">
                {story.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-white/80 text-sm md:text-base font-medium">
                <span>{story.date}</span>
                <span className="w-1 h-1 rounded-full bg-white/50"></span>
                <span>By {story.author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="max-w-3xl mx-auto px-4 py-16 md:py-24">
          <div className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-p:text-[#4a6865] prose-p:leading-relaxed max-w-none">
            {story.content.map((paragraph, index) => (
              <p key={index} className="mb-6 first:text-xl first:text-[#111817] first:font-medium">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-[#111817] mb-6 font-display">
              More Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(stories)
                .filter(([key]) => key !== slug)
                .map(([key, relatedStory]) => (
                  <Link 
                    key={key} 
                    href={`/stories/${key}`}
                    className="group block bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${relatedStory.image}')` }}
                      ></div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-[#111817] group-hover:text-primary transition-colors line-clamp-2">
                        {relatedStory.title}
                      </h4>
                      <p className="text-sm text-[#618986] mt-2">
                        Read Story →
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#f0f4f4] text-[#111817] font-bold hover:bg-[#dbe6e5] transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </article>
      </FadeIn>
    </main>
  );
}
