<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

final class PlayerController extends AbstractController
{
    #[Route('/save-player', name: 'save_player', methods: ['POST'])]
    public function savePlayer(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        /** @var \App\Entity\User $user */
        $user = $this->getUser(); // 👈 utilisateur connecté

        $user->setExperience($data['experience']);
        $user->setHp($data['hp']);

        $user->setForceStat($data['stats']['force']);
        $user->setDexterite($data['stats']['dexterite']);
        $user->setConstitution($data['stats']['constitution']);
        $user->setIntelligence($data['stats']['intelligence']);
        $user->setSagesse($data['stats']['sagesse']);
        $user->setCharisme($data['stats']['charisme']);

        $em->flush(); // 👈 mise à jour directe

        return $this->json([
            'status' => 'ok'
        ]);
    }
    public function getPlayer(): JsonResponse
{   /** @var \App\Entity\User $user */
    $user = $this->getUser();

    if (!$user) {
        return $this->json(['error' => 'not logged'], 401);
    }

    return $this->json([
        'hp' => $user->getHp(),
        'experience' => $user->getExperience(),
        'force' => $user->getForceStat(),
        'dexterite' => $user->getDexterite(),
        'constitution' => $user->getConstitution(),
        'intelligence' => $user->getIntelligence(),
        'sagesse' => $user->getSagesse(),
        'charisme' => $user->getCharisme(),
    ]);
}
}
