import React, { useState, useEffect } from 'react';
import { X, Shield, Lock, Award } from 'lucide-react';

const questionBank = {
  'Iniciático': [
    {
      text: '¿Cuál es la primera de las 7 Virtudes Cardinales de la Orden DeMolay?',
      hashes: [
        'a566b8fc2c113d6eccee847780c264f4a798bb6ca7a1f4fd7ff0b7d9066320c2', // "amor filial"
        'dce04c9d5c264cdf6917993df8e76a85366ba223163222ece52d2b92f665ffb8'  // "el amor filial"
      ]
    },
    {
      text: '¿Quién es el fundador de la Orden DeMolay?',
      hashes: [
        '761a8d0094731dfbed2e15d44d4580b9984d642cd9df214757ff57e70ec06917', // "frank s. land"
        'dc6ffcb9a1a43de4735cfb8227e1aab24a126b0b20f245e1ce6f39e95340be93', // "frank s land"
        '0578e665229ad36bb7bbf425dceb65e63aefcd4ca5aa98244ae341def684e440', // "frank land"
        '9d3db47d458fa1257806f9b8fc0ae9ccb7318b577dfd02ff5708b4cbb5abad5e', // "papa land"
        'c896d3fcb682592a557a74799711f38c55f509db3345ef0384abd8ae7a4c239b', // "dad land"
        'd933bbdd74f3031271f384f752f9e0cd226469d472cd081d5435f7c45a8d5633'  // "frank sherman land"
      ]
    },
    {
      text: '¿Cuántas luces (velas) se colocan alrededor del altar DeMolay?',
      hashes: [
        '7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451', // "7"
        'f9d87cb66982bc5c845950284b7c97b0c1439969dce374809edd3b22e43ee06f', // "siete"
        'ec89fa9fe7df8b80363ec6bc4a372a30118c6561a65d4d79638d14cfef57dabd', // "7 luces"
        'd4996fddf8d93a74bf630254fa2349ed500dc711996b5269e751062a549f9a8f', // "7 velas"
        '5e40b84540ce7b0bdb8e936ff96906293a125a3f60b680732e46ecfe8f05de70', // "siete luces"
        '7b19895154da42d84cb2bd3c92ef9fc19143bc5296f073714378c8cb2b507060'  // "siete velas"
      ]
    }
  ],
  'DeMolay': [
    {
      text: '¿Cuál es la palabra de pase de un DeMolay?',
      hashes: [
        '6854dd5f8188162c2ea21fdf26e39a331fbc3af2c3ebda09c746526c36b7e632', // "fidelitas"
        '5754f739b178f423065ffa4ca43a4db71c8e4c4a556166bf02a03276c306a8f0'  // "fidelidad"
      ]
    },
    {
      text: '¿Cómo se llama el lugar que retrata la ceremonia de elevación?',
      hashes: [
        '6f9a28a0df73b934f8b954762cfe27ab23232311345c960b90bebeba26312873', // "cámara de la comisión"
        '3d6375398341da82aec6c6f296969b69a7818891acd07e136312affd0027b41d', // "camara de la comision"
        'e8f7cbca7db674686e095eeeb7a7ee0077ec09d3b7da4d4d5eecbe8208ca7ea8', // "camara de la comisión"
        '483488f35109e9f8b48332352e795e02b4930163cd8b9e561648bb4c8c77a73f', // "cámara de la comision"
        '89c4235c6be24e9149eac2b240048a8a5699f486a8d2ead679e5268eac33d95f', // "la cámara de la comisión"
        '3431b2e7bfca34e5b51a676b0fecdd9422898a9e299ff09690e65e3f91aca8c1'  // "la camara de la comision"
      ]
    },
    {
      text: '¿Cómo se llaman los tres personajes que condenan a Jacques DeMolay en la ceremonia de elevación?',
      hashes: [
        'a0c0c5c03f4ff641fcdc5ab07b298fb66cc06dc613755fcb52117d8a7340c5a9', // "inquisidores"
        '6953b1202ed74857d9e2988d2f968c5bbb46980c211fdb352cd3180e4dbe6991', // "los inquisidores"
        'fdcb10b798051d2c6095eee76065140ad36e70372a61a3715e6ad20ab036ffaf', // "los tres inquisidores"
        'e6c8cb134eb586fe9daca4560bb909b45914fb31e9328abc5d5aa36fed8c4dfa', // "los 3 inquisidores"
        '1e38732f0dc24f229ae5558cec66dc0c3a293dd6a129b227ec23d2e49951488b', // "inquisidor"
        '2ce2a211b981deda5552514a4322768e7f0b2660cab9c7af9718041451ca583b'  // "jueces inquisidores"
      ]
    },
    {
      text: '¿Cómo murió quemado Jacques DeMolay?',
      hashes: [
        'b20cf9fbfa4e4d3c4b83a7d4da446c9e161a11760b519f0b95227dacd44ae7ff', // "quemado en una hoguera"
        '1eca3cda14cabb32a445739cfbde4f514856f9d21db809486383a933fa7c632b', // "quemado en la hoguera"
        'a068f2504608cd40b218fb73ffff6093fddc2fcf1c0148e411f402ff4cdbd8b3', // "en una hoguera"
        '9fbb883a5d2cad4092a9d5057b5a09e60c1214bbba0266d1ca3c76b715598be0', // "en la hoguera"
        'ee4f232eec78169cd6a497f431ad242ab1bdf13af8ae202a9c79d238027629dd', // "hoguera"
        '29ecb99665fe676eb451cacb6834d4c6b4d67e46b4f9935176ec3ebc534c9c2d', // "la hoguera"
        'dda19547328ddc8c411515894ee3014e8b817a72ed061c56e33d6fe7e7166866', // "quemado vivo en una hoguera"
        '21e283f0ae680beea445922c5dd0408f1c37d330054e44d9532c4dc731d93acc', // "quemado vivo en la hoguera"
        '72c147c99e82a45a137f13d5e13174ab099c52c669382bc522ed1146b2d386c4', // "quemado vivo"
        '8ce00dc83a9c933ffcc5558b0a734200c3eb25de8ee8ef39af4e8b224cd278ef'  // "quemado"
      ]
    },
    {
      text: '¿Cuál es el nombre del último Gran Maestre histórico de los Caballeros Templarios?',
      hashes: [
        '76494809fea2e1e3e27b50d267b194f4a4c7c7f0f5ddbcfdb0342ece92e036f2', // "jacques de molay"
        'b56a02cb68067cbbda9ae989491fa168806c9c24e190a9919d3a23239f37b6aa', // "jacques demolay"
        'bc36f55a711514b23a0ff862c4ae90f09872d03a74a147bfb49a07244e3501a2'  // "de molay"
      ]
    },
    {
      text: '¿En qué año fue fundada oficialmente la Orden DeMolay en Kansas City?',
      hashes: [
        '274dfec6e079fb08d6b5771537c54d3f0bd36c64c3d8ed0a4e6d2f201b489274', // "1919"
        '25ec8371e7f89277444033fa91f417d2989ee5bcf803f85739a91691ed0e85b0'  // "mil novecientos diecinueve"
      ]
    },
    {
      text: '¿Quién fue el primer miembro activo de la Orden DeMolay en fallecer?',
      hashes: [
        '23683587bfa35d341ac79349c1fc4285b41b1a553b3ba2aec9a521b117bedeef', // "louis lower"
        '856f764bc617d641d076b6ddfcaccdd5c622bdd4e642457329f445f15cd27535', // "louis g. lower"
        '2a925d1c84a17157f5b45c93cdb9e9d758d785048d5381743c3681805f1b513c'  // "louis g lower"
      ]
    }
  ],
  'Caballero': [
    {
      text: '¿Cuál es la palabra de pase de un Caballero?',
      hashes: [
        '2ef07e302b354e689bd9d0d2570b03a61cb46f27948b6020e7f9897811c8b13b', // "chivalry"
        '16649940562bf65981a2915b3bb18b7d0b5a0906f334016af3066c8a2e55beb6', // "caballería"
        'bb61a976d6c3ae650905f04ec42029f1cd9792412087e3f74e797bf1218513dd'  // "caballeria"
      ]
    },
    {
      text: '¿Cómo se llama el Papa que inició la primera cruzada?',
      hashes: [
        'c1a78a51090f098886ddc1da3ed6ba65fef4a767b22567b317b3ac3fe3b2ffa5', // "urbano ii"
        'ab697b085e19bdca7e1ab8dfe0f3fcb200cf796fb92c86c76369df0ae82acd90', // "urbano 2"
        '2065289d6ffc0b9b9e55b8608a75f22a5fffc1ea500f3235f1449af4aae27b3f', // "papa urbano ii"
        'bfa04708d7278678da62021d8d5cc2f07330ffc51674a48f262bdb8132836af5', // "papa urbano 2"
        '31fbf1c592f07311a6c8562d96683a70d425a2458ec48284965e34b8fdf7ddf5', // "urbano segundo"
        'a2298b25e156e9e93fc8703e17b8f7e49ae6e619ff874c68a1c43dd7e1a50619'  // "el papa urbano ii"
      ]
    },
    {
      text: '¿A qué cabeza o ser según adoraban los templarios?',
      hashes: [
        '14e0e19b7dda48e01109117813c982619dcdc0f44843199af0240edc4413a41e', // "baphomet"
        'cae26e19f7c8b00eacce5c5428fa8677528564e1b5fe00bb9605e08cd74276fa', // "bafomet"
        '91df9e89e1faaaa761c79660b97c56ac211c6bc3c9cc9ca7d970d9a55f93fa64', // "bafometo"
        '7edf29436bc14a312166a04821e9701c64ae2796c917126a6820d7f84e0f4806', // "el baphomet"
        'a616c0826fef383cbf216f907607c9b02b8dc2ecd13deaccc28924733ec86358'  // "baphometo"
      ]
    },
    {
      text: '¿Cuántos hijos tuvo Abraham y cómo se llamaban?',
      hashes: [
        'f39220c72f37bb129005b44aa722c1c36f9882ee1595cc020ed8751dfc567f6f', // "2, isaac e ismael"
        'db8ae6b4acd341c0cbd232f8320e325c8e5e287aa09c90b3aaf293e416a0b923', // "2: isaac e ismael"
        'f7953c9e65d3e2bcdebc7150a203e9597a7e5bfa3781c6bba274722ff961e5c9', // "2 isaac e ismael"
        'eddf4699ec3d6f0e6853892bebd99d9af2437d99949d58f2721cca01ed7dd778', // "isaac e ismael"
        'e68659c61a9234a1f9f0ab653271a771c0e5d341f75903ec5a1f530034af867b', // "dos, isaac e ismael"
        '6054ad2f83102bc3d7781ff94f67259dd2a4e2c71b8a1c2dbb643aa1ea17f12c', // "dos: isaac e ismael"
        '717220a301fbe47c13bdbc9d7c177dd7cab826ecdd57e6598d3066a56b619448', // "dos isaac e ismael"
        'c3fbe6b9b25612bacae8124c8d16c322f7eb897259ce735943ba38b77bcc49be', // "2, ismael e isaac"
        '97d51d35398566a0d7ffaa1cb64aefe77652a824ae9b84d43525f4da3b9a470e', // "2 ismael e isaac"
        '5da79b307a391fa4ceff25b776b148ae072434069817ba54bb87cdf33f2d8761', // "ismael e isaac"
        'b8b756bf21f9591a362f2f339f6cb79a39bc8bad2edd36385362c46f44381ae3', // "dos, ismael e isaac"
        '5eb831f3eca12c03c873737a11b54a947d65c02b7ff57d28dda457efd52e41b4', // "dos ismael e isaac"
        '88eb423269c1d0b6ee8b78b3bd8fc175461158a256958fd1168de421d192ce3f', // "2 hijos, isaac e ismael"
        'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35', // "2"
        'c1299854f2b209632ab22aeb848c24c2b02da4b37ecf93a830ee9c7f6f809924'  // "dos"
      ]
    },
    {
      text: '¿A qué edad mínima se puede ser investido con el Grado de Caballero en el Priorato?',
      hashes: [
        '4523540f1504cd17100c4835e85b7eefd49911580f8efff0599a8f283be6b9e3', // "17"
        '88d8f449e67e20228fdf7befed3778311af34de1495df8b40aae9ebe30e94ea2', // "diecisiete"
        '344aa497dbef11d510b40d681e5f7d0b025c792c6529830400df8b80b446e9d4'  // "17 años"
      ]
    },
    {
      text: '¿Cuántas capillas de la Caballería Moral integran la Orden de Caballería?',
      hashes: [
        'ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d', // "5"
        '216e1e3f8fed804bf3c16a8f9dac7d25fd4902b7277828729dcceb797c8c1ddc', // "cinco"
        'e1268c05eaf67f2e7c6e1631ac947f01c403d4c76966671ff7a81c8a5eda08f4', // "5 capillas"
        '76bea1af931e66ec6e47d4b845e03868d15b3f7a3a626446a909b3710cee7974'  // "cinco capillas"
      ]
    }
  ],
  'Chevalier': [
    {
      text: '¿Cuál es la flor que representa a un Chevalier en la Orden?',
      hashes: [
        '6a61eb7383e868f226d30d31c95348371760d993de5a098747a36923bdcaf25c', // "rosa"
        '5bc2508c2a3adf1f479e54e8e29a6e821934dd4981bba97a1f84bed3041a23b9', // "rosa roja"
        'b98f002e41f48c643d1fb3286f5d5f4990b810e834a34d2c14e3791af34b306e', // "la rosa"
        '1d93f642a31d5d14130bf3e1ef848c29ca1a6f79c841e35e1ed36ae0f60fb259'  // "la rosa roja"
      ]
    },
    {
      text: '¿Cuál es el lema oficial de la Corte Chevalier?',
      hashes: [
        '42670c66c070211511ba20c1d5cf01843691534171194ed61d250fbcf6456b04' // "fidelis usque ad mortem"
      ]
    }
  ]
};

async function getSHA256Hash(text) {
  const msgUint8 = new TextEncoder().encode(text.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

export default function ChallengeModal({ isOpen, onClose, onSuccess, grade }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const pickRandomQuestion = (selectedGrade) => {
    const list = questionBank[selectedGrade];
    if (list && list.length > 0) {
      const idx = Math.floor(Math.random() * list.length);
      setCurrentQuestion(list[idx]);
      setAnswer('');
      setError('');
    }
  };

  useEffect(() => {
    if (isOpen && grade) {
      pickRandomQuestion(grade);
    }
  }, [grade, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!answer.trim()) {
      setError('Por favor, ingrese su respuesta.');
      return;
    }

    try {
      setIsVerifying(true);
      setError('');

      const rawInput = answer.trim().toLowerCase();
      const noAccents = rawInput.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const noPunct = rawInput.replace(/[.,:;!¡?¿()]/g, '').replace(/\s+/g, ' ').trim();
      const noPunctNoAccents = noAccents.replace(/[.,:;!¡?¿()]/g, '').replace(/\s+/g, ' ').trim();

      const candidateHashes = await Promise.all([
        getSHA256Hash(rawInput),
        getSHA256Hash(noAccents),
        getSHA256Hash(noPunct),
        getSHA256Hash(noPunctNoAccents)
      ]);

      const isCorrect = candidateHashes.some((h) => currentQuestion.hashes.includes(h));

      if (isCorrect) {
        onSuccess();
      } else {
        setError('Respuesta incorrecta al desafío. Por favor, consulte su manual ritualístico.');
      }
    } catch (err) {
      setError('Error al procesar la verificación criptográfica.');
      console.error(err);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark Blur Overlay */}
      <div 
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-demolay-gold/40 bg-stone-900 text-stone-100 shadow-2xl transition-all duration-300 transform scale-100">
        
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-demolay-gold/60 via-demolay-gold to-demolay-gold/60" />
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-5 text-stone-400 hover:text-demolay-gold transition-colors duration-200"
          aria-label="Cerrar modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-demolay-green-950 border border-demolay-gold/30 text-demolay-gold mb-3">
              <Shield className="h-8 w-8 animate-pulse" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-100 tracking-wide">
              Desafío de Grado
            </h3>
            <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-semibold">
              Requisito: Grado {grade}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 bg-red-950/40 border border-red-500/50 rounded-lg text-xs text-red-300 text-center font-sans">
                {error}
              </div>
            )}

            {currentQuestion && (
              <div className="p-4 bg-stone-950 border border-stone-850 rounded-lg space-y-3 text-left">
                <div className="border-b border-stone-850 pb-1.5 text-left">
                  <span className="text-[9px] uppercase tracking-widest text-demolay-gold font-bold">
                    PREGUNTA RITUALÍSTICA
                  </span>
                </div>
                {/* Clean, readable font-sans question */}
                <p className="text-sm font-sans font-medium text-stone-200 leading-relaxed">
                  {currentQuestion.text}
                </p>
              </div>
            )}

            <div>
              <label htmlFor="answer" className="block text-xs font-semibold uppercase tracking-wider text-demolay-gold mb-1.5 text-left">
                Respuesta al Desafío
              </label>
              <input
                id="answer"
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Ingrese la palabra o concepto clave..."
                className="w-full bg-stone-950 border border-stone-700 focus:border-demolay-gold/80 rounded-lg py-2.5 px-3.5 text-sm text-stone-100 placeholder-stone-600 focus:outline-none transition-all duration-200 font-sans"
                autoComplete="off"
                autoFocus
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isVerifying}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-demolay-gold to-amber-500 hover:from-amber-500 hover:to-demolay-gold text-stone-950 font-bold uppercase tracking-wider text-xs py-3 px-4 rounded-lg shadow-lg hover:shadow-demolay-gold/10 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed font-sans"
              >
                <Lock className="h-4 w-4" />
                {isVerifying ? 'Validando...' : 'Desbloquear y Ver'}
              </button>
            </div>
          </form>

          {/* Institutional note */}
          <div className="mt-6 border-t border-stone-800 pt-4 flex gap-3 text-left">
            <Award className="h-5 w-5 text-demolay-gold shrink-0 mt-0.5" />
            <p className="text-[10px] text-stone-400 leading-normal font-sans">
              La descarga del material está sujeta a los juramentos tomados ante el Altar del Capítulo. La difusión pública viola las normas internas de la Orden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
