import { useState } from "react";
import { Heart, MessageCircle, Send, Shield, Trash2 } from "lucide-react";
import MockupFrame from "./MockupFrame";

interface Post {
  id: number;
  user: {
    firstName: string;
    lastName: string;
    avatarInitials: string;
    role: string;
  };
  captions: string;
  created_at: string;
  likes_count: number;
  is_liked: boolean;
  comments: { id: number; author: string; text: string; time: string }[];
  image_url?: string;
}

const initialConnectInPosts: Post[] = [
  {
    id: 1,
    user: {
      firstName: "Brandon",
      lastName: "Picq",
      avatarInitials: "BP",
      role: "Développeur Full-Stack • Web@cadémie",
    },
    captions:
      "Migration de Connect'In vers Spring Boot 4 et Java 21 terminée avec succès ! 🎉 Le backend expose désormais 30+ endpoints REST sécurisés avec Spring Security et JWT Bearer Tokens. Les requêtes MySQL sont optimisées et le frontend React reste 100% découplé.",
    created_at: "Il y a 2h",
    likes_count: 24,
    is_liked: true,
    comments: [
      { id: 101, author: "Lina Dev", text: "Félicitations pour la migration Spring Boot !", time: "Il y a 1h" },
      { id: 102, author: "Alexandre K.", text: "Très propre la séparation API / React.", time: "Il y a 30 min" },
    ],
    image_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    user: {
      firstName: "Sarah",
      lastName: "Martin",
      avatarInitials: "SM",
      role: "Lead DevOps",
    },
    captions:
      "Nouveau cluster Docker Compose prêt pour la mise en pré-production de nos services de messagerie et de notification !",
    created_at: "Il y a 4h",
    likes_count: 12,
    is_liked: false,
    comments: [
      { id: 103, author: "Brandon Picq", text: "Top, je synchronise la stack backend avec la base MySQL.", time: "Il y a 3h" },
    ],
  },
];

export default function ConnectInDemo() {
  const [posts, setPosts] = useState<Post[]>(initialConnectInPosts);
  const [newCaption, setNewCaption] = useState("");
  const [activeCommentPostId, setActiveCommentPostId] = useState<number | null>(null);
  const [commentInput, setCommentInput] = useState("");
  const [showJwt, setShowJwt] = useState(false);

  const toggleLike = (postId: number) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const nextLiked = !p.is_liked;
          return {
            ...p,
            is_liked: nextLiked,
            likes_count: nextLiked ? p.likes_count + 1 : p.likes_count - 1,
          };
        }
        return p;
      })
    );
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCaption.trim()) return;

    const newPost: Post = {
      id: Date.now(),
      user: {
        firstName: "Brandon",
        lastName: "Picq",
        avatarInitials: "BP",
        role: "Développeur Full-Stack (Connecté)",
      },
      captions: newCaption,
      created_at: "À l'instant",
      likes_count: 1,
      is_liked: true,
      comments: [],
    };

    setPosts([newPost, ...posts]);
    setNewCaption("");
  };

  const handleAddComment = (postId: number) => {
    if (!commentInput.trim()) return;

    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            comments: [
              ...p.comments,
              {
                id: Date.now(),
                author: "Brandon Picq",
                text: commentInput,
                time: "À l'instant",
              },
            ],
          };
        }
        return p;
      })
    );
    setCommentInput("");
  };

  const handleDeletePost = (postId: number) => {
    setPosts((prev) => prev.filter((p) => p.id !== postId));
  };

  const handleReset = () => {
    setPosts(initialConnectInPosts);
    setNewCaption("");
    setActiveCommentPostId(null);
    setCommentInput("");
    setShowJwt(false);
  };

  return (
    <MockupFrame
      title="Connect'In V2 — Réseau Social Spring Boot"
      url="https://connectin.epitech.local/feed"
      badge="Design Authentique Connect'In V2"
      onReset={handleReset}
      themeStyle="dark"
    >
      <div className="bg-[#0f172a] text-slate-100 min-h-[540px] font-sans antialiased flex flex-col justify-between">
        {/* Navbar Connect'In authentique */}
        <div className="bg-slate-900/90 border-b border-white/10 px-4 sm:px-6 py-3 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
              in
            </div>
            <div>
              <h3 className="font-bold text-sm text-white leading-none">Connect'In V2</h3>
              <span className="text-[10px] text-purple-300 font-mono">Réseau Social Professionnel</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowJwt(!showJwt)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                showJwt
                  ? "bg-purple-950/60 border-purple-500 text-purple-300 shadow"
                  : "bg-slate-800 border-white/10 text-slate-300 hover:text-white"
              }`}
            >
              <Shield size={13} className="text-purple-400" />
              {showJwt ? "Fermer JWT" : "Token JWT"}
            </button>

            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white">
                BP
              </div>
            </div>
          </div>
        </div>

        {/* Corps principal */}
        <div className="p-4 sm:p-6 flex-1 space-y-4 max-w-3xl mx-auto w-full">
          {/* Inspecteur de Token JWT */}
          {showJwt && (
            <div className="bg-slate-950 border border-purple-500/40 rounded-2xl p-4 font-mono text-xs text-purple-200 animate-slideIn shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                <span className="text-slate-400 font-bold uppercase text-[10px]">
                  Payload Décodé — Spring Security Bearer
                </span>
                <span className="text-emerald-400 text-[10px]">EXP: 24h</span>
              </div>
              <pre className="text-[11px] text-slate-300 leading-relaxed overflow-x-auto">
                {JSON.stringify(
                  {
                    sub: "brandon.picq@epitech.eu",
                    roles: ["ROLE_USER", "ROLE_TEAM_LEAD"],
                    iss: "connectin-v2-spring-boot",
                    team: "Team Fullstack Web@cadémie",
                  },
                  null,
                  2
                )}
              </pre>
            </div>
          )}

          {/* Formulaire PostForm de Connect'In */}
          <form
            onSubmit={handleCreatePost}
            className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 shadow-lg space-y-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-[2px] shrink-0">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white">
                  BP
                </div>
              </div>
              <textarea
                value={newCaption}
                onChange={(e) => setNewCaption(e.target.value)}
                placeholder="Exprimez-vous ou partagez un projet avec vos collègues..."
                rows={2}
                className="w-full bg-slate-900/50 border border-purple-500/20 rounded-xl p-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-purple-300/60 font-mono">
                API: POST /api/posts • MySQL 8.0
              </span>
              <button
                type="submit"
                disabled={!newCaption.trim()}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-40 text-white rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <Send size={13} /> Publier
              </button>
            </div>
          </form>

          {/* Liste des posts (PostItem) */}
          <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-xl group"
              >
                {/* Header du post */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-[2px]">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white">
                        {post.user.avatarInitials}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs">
                        {post.user.firstName} {post.user.lastName}
                      </h4>
                      <span className="text-purple-300/50 text-[10px] uppercase tracking-wider">
                        {post.user.role} • {post.created_at}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-pink-400 hover:bg-pink-500/10 transition-colors"
                    title="Supprimer ce post"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>

                {/* Caption */}
                <p className="text-slate-200 text-xs leading-relaxed mb-3">{post.captions}</p>

                {/* Image attachée si présente */}
                {post.image_url && (
                  <div className="rounded-xl overflow-hidden border border-white/10 mb-3 max-h-48">
                    <img src={post.image_url} alt="Post asset" className="w-full object-cover h-48" />
                  </div>
                )}

                {/* Barre de likes et commentaires */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-slate-400">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                        post.is_liked ? "text-pink-400 font-bold" : "hover:text-white"
                      }`}
                    >
                      <Heart size={15} className={post.is_liked ? "fill-pink-500 text-pink-500" : ""} />
                      <span>{post.likes_count}</span>
                    </button>

                    <button
                      onClick={() =>
                        setActiveCommentPostId(activeCommentPostId === post.id ? null : post.id)
                      }
                      className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                    >
                      <MessageCircle size={15} />
                      <span>{post.comments.length}</span>
                    </button>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500">Post #{post.id}</span>
                </div>

                {/* Tiroir des commentaires */}
                {activeCommentPostId === post.id && (
                  <div className="mt-3 pt-3 border-t border-white/10 space-y-2 animate-fadeIn">
                    <div className="space-y-1.5">
                      {post.comments.map((comment) => (
                        <div key={comment.id} className="bg-slate-900/70 rounded-xl p-2.5 text-xs text-slate-200 border border-white/5">
                          <div className="flex items-center justify-between text-[10px] text-purple-300 font-semibold mb-0.5">
                            <span>{comment.author}</span>
                            <span className="text-slate-500 font-normal">{comment.time}</span>
                          </div>
                          <p>{comment.text}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-1">
                      <input
                        type="text"
                        placeholder="Écrire un commentaire..."
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                        className="flex-1 bg-slate-900 border border-purple-500/20 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      />
                      <button
                        onClick={() => handleAddComment(post.id)}
                        className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-xs font-bold"
                      >
                        Envoyer
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Connect'In */}
        <div className="bg-slate-900 border-t border-white/10 px-4 sm:px-6 py-2.5 text-center text-[10px] font-mono text-slate-400 flex items-center justify-between">
          <span>Connect'In V2 — Architecture Spring Boot 4 + MySQL</span>
          <span>Dockerisé • Spring Security JWT</span>
        </div>
      </div>
    </MockupFrame>
  );
}
