<?php

namespace App\Entity;

use App\Enum\Classes;
use App\Repository\PersonnageRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PersonnageRepository::class)]
class Personnage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $for = null;

    #[ORM\Column]
    private ?int $dex = null;

    #[ORM\Column]
    private ?int $const = null;

    #[ORM\Column]
    private ?int $inte = null;

    #[ORM\Column]
    private ?int $sag = null;

    #[ORM\Column]
    private ?int $cha = null;

    #[ORM\Column(enumType: Classes::class)]
    private ?Classes $classe = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFor(): ?int
    {
        return $this->for;
    }

    public function setFor(int $for): static
    {
        $this->for = $for;

        return $this;
    }

    public function getDex(): ?int
    {
        return $this->dex;
    }

    public function setDex(int $dex): static
    {
        $this->dex = $dex;

        return $this;
    }

    public function getConst(): ?int
    {
        return $this->const;
    }

    public function setConst(int $const): static
    {
        $this->const = $const;

        return $this;
    }

    public function getInte(): ?int
    {
        return $this->inte;
    }

    public function setInte(?int $inte): static
    {
        $this->inte = $inte;

        return $this;
    }

    public function getSag(): ?int
    {
        return $this->sag;
    }

    public function setSag(int $sag): static
    {
        $this->sag = $sag;

        return $this;
    }

    public function getCha(): ?int
    {
        return $this->cha;
    }

    public function setCha(int $cha): static
    {
        $this->cha = $cha;

        return $this;
    }

    public function getClasse(): ?Classes
    {
        return $this->classe;
    }

    public function setClasse(Classes $classe): static
    {
        $this->classe = $classe;

        return $this;
    }
}
