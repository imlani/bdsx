import { pdb } from "../core";
import { UNDNAME_NAME_ONLY } from "../dbghelp";

const symbols = [
    'ScriptEngine::~ScriptEngine',
    'ScriptEngine::startScriptLoading',
    'MinecraftServerScriptEngine::onServerThreadStarted',
    'std::thread::_Invoke<std::tuple<<lambda_8914ed82e3ef519cb2a85824fbe333d8> >,0>',
    'ConsoleInputReader::getLine',
    '<lambda_8914ed82e3ef519cb2a85824fbe333d8>::operator()',
    'ScriptEngine::initialize',
    'ScriptEngine::shutdown',
    'Level::createDimension',
    'Level::fetchEntity',
    'Level::getActivePlayerCount',
    'Crypto::Random::generateUUID',
    'Player::add',
    'Player::addLevels',
    'Player::attack',
    'Player::drop',
    'Player::getCarriedItem',
    'Player::getPlayerGameType',
    'Player::getSupplies',
    'Player::setName',
    'Player::take',
    'Player::_crit',
    'Player::respawn',
    'Player::teleportTo',
    'Player::startCooldown',
    'Player::getPlayerPermissionLevel',
    'Player::jumpFromGround',
    'Player::useItem',
    'Player::isSleeping',
    'Player::setSleeping',
    'Player::isJumping',
    'Player::setSize',
    'EnderChestContainer::startOpen',
    'EnderChestContainer::stopOpen',
    'ServerNetworkHandler::_getServerPlayer',
    'ServerNetworkHandler::allowIncomingConnections',
    'ServerNetworkHandler::disconnectClient',
    'ServerNetworkHandler::updateServerAnnouncement',
    'ServerNetworkHandler::setMaxNumPlayers',
    'ServerPlayer::changeDimension',
    'ServerPlayer::knockback',
    'ServerPlayer::openInventory',
    'ServerPlayer::sendInventory',
    'ServerPlayer::sendNetworkPacket',
    'ServerPlayer::setPlayerGameType',
    'MinecraftCommands::executeCommand',
    "ServerPlayer::`vftable'",
    'Actor::getHealth',
    'Actor::getMaxHealth',
    'Actor::addTag',
    'Actor::getNameTag',
    'Actor::getOffhandSlot',
    'Actor::getPos',
    'Actor::getRotation',
    'Actor::getRegionConst',
    'Actor::getUniqueID',
    'Actor::hasTag',
    'Actor::removeTag',
    'Actor::setNameTag',
    'Actor::hurt',
    'Actor::getArmor',
    'Actor::burn',
    'Actor::setSneaking',
    'Actor::setScoreTag',
    'Actor::getScoreTag',
    'ExtendedCertificate::getXuid',
    'ExtendedCertificate::getIdentityName',
    'ExtendedCertificate::getIdentity',
    'MinecraftPackets::createPacket',
    'NetworkHandler::onConnectionClosed#1',
    'BedrockLogOut',
    'DedicatedServer::stop',
    'NetworkIdentifier::operator==',
    'CommandOutputSender::send',
    'ServerInstance::ServerInstance',
    'ServerInstance::disconnectAllClientsWithMessage',
    'NetworkHandler::_getConnectionFromId',
    'NetworkHandler::send',
    'LoopbackPacketSender::sendToClients',
    'NetworkHandler::_sortAndPacketizeEvents',
    'NetworkHandler::_sendInternal',
    'PacketViolationHandler::_handleViolation',
    'Level::removeEntityReferences',
    'Actor::~Actor',
    'ScriptEngine::_processSystemInitialize',
    'NetworkIdentifier::getHash',
    'BatchedNetworkPeer::sendPacket',
    'Json::Value::isMember',
    'Json::Value::~Value',
    'Json::Value::getMemberNames',
    'Json::Value::size',
    'Json::Value::resolveReference',
    'MinecraftServerScriptEngine::onServerUpdateEnd',
    'printf',
    "ServerCommandOrigin::`vftable'",
    "ScriptCommandOrigin::`vftable'",
    'Minecraft::getLevel',
    'Minecraft::getNetworkHandler',
    'Minecraft::getServerNetworkHandler',
    'Minecraft::getCommands',
    'std::basic_string<char,std::char_traits<char>,std::allocator<char> >::_Tidy_deallocate',
    "std::_Ref_count_obj2<CommandContext>::`vftable'",
    'CommandContext::CommandContext',
    'CommandVersion::CurrentVersion',
    'ServerCommandOrigin::ServerCommandOrigin',
    'ScriptApi::ScriptFramework::registerConsole',
    'ConsoleInputReader::ConsoleInputReader',
    'ConsoleInputReader::~ConsoleInputReader',
    'ConsoleInputReader::unblockReading',
    'Item::allowOffhand',
    'Item::isDamageable',
    'Item::isFood',
    'Item::getCreativeCategory',
    'Item::setAllowOffhand',
    'ItemStackBase::getId',
    'ItemStackBase::getItem',
    'ItemStackBase::getName',
    'ItemStackBase::getUserData',
    'ItemStackBase::hasCustomHoverName',
    'ItemStackBase::isBlock',
    'ItemStackBase::isNull',
    'ItemStackBase::setCustomName',
    'ItemStackBase::getEnchantValue',
    'ItemStackBase::isEnchanted',
    'ItemStackBase::setCustomLore',
    'ItemStackBase::setDamageValue',
    'ItemStackBase::startCoolDown',
    'ItemStackBase::sameItem',
    'ItemStackBase::load',
    'ItemStackBase::isStackedByData',
    'ItemStackBase::isStackable',
    'ItemStackBase::isWearableItem',
    'ItemStackBase::isPotionItem',
    'ItemStackBase::isPattern',
    'ItemStackBase::isMusicDiscItem',
    'ItemStackBase::isLiquidClipItem',
    'ItemStackBase::isHorseArmorItem',
    'ItemStackBase::isGlint',
    'ItemStackBase::isFullStack',
    'ItemStackBase::isFireResistant',
    'ItemStackBase::isExplodable',
    'ItemStackBase::isDamaged',
    'ItemStackBase::isDamageableItem',
    'ItemStackBase::isArmorItem',
    'ItemStackBase::getComponentItem',
    'ItemStackBase::getMaxDamage',
    'ItemStackBase::getDamageValue',
    'ItemStackBase::getAttackDamage',
    'Item::getCommandNames',
    'PlayerInventory::add',
    'PlayerInventory::clearSlot',
    'PlayerInventory::getContainerSize',
    'PlayerInventory::getFirstEmptySlot',
    'PlayerInventory::getHotbarSize',
    'PlayerInventory::getItem',
    'PlayerInventory::getSelectedItem',
    'PlayerInventory::getSlotWithItem',
    'PlayerInventory::getSlots',
    'PlayerInventory::removeItem',
    'PlayerInventory::selectSlot',
    'PlayerInventory::setItem',
    'PlayerInventory::setSelectedItem',
    'PlayerInventory::swapSlots',
    'CommandRegistry::registerCommand',
    'CommandRegistry::registerAlias',
    'CommandRegistry::findCommand',
    'CommandRegistry::registerOverloadInternal',
    'CommandRegistry::serializeAvailableCommands',
    'BlockSource::getBlock',
    'BlockSource::mayPlace',
    'GameMode::_creativeDestroyBlock',
    'SurvivalMode::destroyBlock',
    'Block::getName',
    'BlockLegacy::getCreativeCategory',
    'BlockLegacy::setDestroyTime',
    'BlockLegacy::getCommandNames',
    'RakNetServerLocator::_announceServer',
    'HealthAttributeDelegate::change',
    'MinecraftCommands::getRegistry',
    'MinecraftCommands::handleOutput',
    'CommandOutput::getType',
    'CommandSelectorBase::CommandSelectorBase',
    'CommandSelectorBase::~CommandSelectorBase',
    'CommandSelectorBase::newResults',
    'ScriptServerActorEventListener::onActorSneakChanged',
    'ScriptServerActorEventListener::onActorCreated',
    'ScriptServerActorEventListener::onActorDeath',
    'ScriptServerActorEventListener::onActorRemoved',
    'Dimension::getDimensionId',
    'TeleportCommand::computeTarget',
    'TeleportCommand::applyTarget',
    'ActorCommandOrigin::ActorCommandOrigin',
    "MinecraftCommands::`vftable'",
    "CommandOutputSender::`vftable'",
    "Minecraft::`vftable'",
    'Actor::getCommandPermissionLevel',
    'Player::getCommandPermissionLevel',
    'Actor::getDimension',
    'Actor::getDimensionId',
    'Actor::getAttributes',
    'Actor::getRuntimeID',
    'Actor::startRiding',
    'Actor::stopRiding',
    'Actor::hasEffect',
    'Actor::getEffect',
    'Actor::tryGetFromEntity',
    'Mob::die',
    'Abilities::getCommandPermissions',
    'Abilities::getPlayerPermissions',
    'Abilities::setCommandPermissions',
    'Abilities::setPlayerPermissions',
    'Abilities::getAbility',
    'Abilities::setAbility',
    'Ability::getBool',
    'Ability::getFloat',
    'Ability::setBool',
    'AdventureSettingsPacket::AdventureSettingsPacket',
    'Level::destroyBlock',
    'Level::getActorFactory',
    'Level::getAdventureSettings',
    'Level::getScoreboard',
    'Level::getTagRegistry',
    'Level::updateWeather',
    'Level::save',
    'Level::tick',
    'Level::getUsers',
    'ServerLevel::setCommandsEnabled',
    'ServerLevel::setShouldSendSleepMessage',
    'CommandUtils::createItemStack',
    'Scoreboard::addObjective',
    'Scoreboard::getCriteria',
    'Scoreboard::getDisplayObjective',
    'Scoreboard::getObjective',
    'Scoreboard::getObjectiveNames',
    'Scoreboard::getObjectives',
    'Scoreboard::removeObjective',
    'ServerScoreboard::clearDisplayObjective',
    'ServerScoreboard::setDisplayObjective',
    'ServerScoreboard::onScoreChanged',
    'Objective::getPlayers',
    'Objective::getPlayerScore',
    'ScoreboardIdentityRef::modifyScoreInObjective',
    'Scoreboard::getScoreboardIdentityRef',
    'InventoryTransaction::addItemToContent',
    'InventoryTransaction::getActions',
    'InventoryTransactionItemGroup::getItemInstance',
    'MobEffect::getById',
    'PlayerListPacket::emplace',
    'Player::getSkin',
    "ItemActor::`vftable'",
    'ServerPlayer::_nextContainerCounter',
    'EnchantUtils::getEnchantLevel',
    'EnchantUtils::hasCurse',
    'EnchantUtils::hasEnchant',
    'Player::getCertificate',
    'Level::getSeed',
    'SharedConstants::CurrentGameSemVersion',
    'SharedConstants::NetworkProtocolVersion',
    'Level::getBlockPalette',
    'ItemStack::fromDescriptor',
    'MobEffectInstance::save',
    'MobEffectInstance::load',
    'ItemStackBase::save',
    'Actor::save',
    "EndTag::`vftable'",
    'ListTag::add',
    'ListTag::size',
    'StructureSettings::StructureSettings',
    'StructureSettings::~StructureSettings',
    'StructureManager::getOrCreate',
    'Level::getStructureManager',
    'StructureManager::StructureManager',
    'StructureTemplateData::save',
    'StructureTemplateData::load',
    'StructureTemplate::fillFromWorld',
    'StructureTemplate::placeInWorld',
    'StructureTemplate::getSize',
    'StructureTemplate::getBlockAtPos',
    'StructureSettings::getIgnoreBlocks',
    'StructureSettings::getIgnoreEntities',
    'StructureSettings::isAnimated',
    'StructureSettings::getStructureOffset',
    'StructureSettings::getStructureSize',
    'StructureSettings::getPivot',
    'StructureSettings::getAnimationMode',
    'StructureSettings::getMirror',
    'StructureSettings::getRotation',
    'StructureSettings::getAnimationSeconds',
    'StructureSettings::getIntegrityValue',
    'StructureSettings::getAnimationTicks',
    'StructureSettings::getIntegritySeed',
    'StructureSettings::setAnimationMode',
    'StructureSettings::setAnimationSeconds',
    'StructureSettings::setIgnoreBlocks',
    'StructureSettings::setIgnoreEntities',
    'StructureSettings::setIgnoreJigsawBlocks',
    'StructureSettings::setIntegritySeed',
    'StructureSettings::setIntegrityValue',
    'StructureSettings::setMirror',
    'StructureSettings::setPaletteName',
    'StructureSettings::setPivot',
    'StructureSettings::setReloadActorEquipment',
    'StructureSettings::setRotation',
    'StructureSettings::setStructureOffset',
    'StructureSettings::setStructureSize',
    'Level::getDimension',
    'Block::getDescriptionId',
    'Block::getRuntimeId',
    'Dimension::getBlockSourceDEPRECATEDUSEPLAYERREGIONINSTEAD',
    'FarmBlock::transformOnFall',
    'SplashPotionEffectSubcomponent::doOnHitEffect',
    'Scoreboard::getScoreboardIdentityRefs',
    'ScoreboardIdentityRef::modifyScoreInObjective',
    'Scoreboard::getTrackedIds',
    'ItemStackBase::getRawNameId',
    'ItemStackBase::_setItem',
    'Actor::getStatusFlag',
    'ItemStackBase::constructItemEnchantsFromUserData',
    'CommandUtils::spawnEntityAt',
    'Actor::startSwimming',
    'Player::startSwimming',
    'RakNetInstance::getPort',
    'ScoreboardIdentityRef::removeFromObjective',
    'ActorDamageSource::getDamagingEntityUniqueID',
    'Player::inventoryChanged',
    'ItemStackBase::getMaxStackSize',
    'ItemStack::clone',
    'ItemStackBase::toString',
    'ItemStackBase::toDebugString',
    'ItemStackBase::getAuxValue',
    'ItemStackBase::setAuxValue',
    'ArmorItem::getArmorValue',
    'Mob::getArmorValue',
    'IdentityDefinition::getEntityId',
    'IdentityDefinition::getPlayerId',
    'IdentityDefinition::getFakePlayerName',
    'IdentityDefinition::getIdentityType',
    'Level::getGameRules',
    'Abilities::getAbilityName',
    'Abilities::nameToAbilityIndex',
    'GameRules::nameToGameRuleIndex',
    'GameRules::getRule',
    'GameRules::hasRule',
    'GameRules::createAllGameRulesPacket',
    'GameRule::getBool',
    'GameRule::getInt',
    'GameRule::getFloat',
    'Level::hasCommandsEnabled',
    'Level::getLevelData',
    'LevelData::getGameDifficulty',
    'LevelData::setGameDifficulty',
    'OwnerStorageEntity::_getStackRef',
    'Actor::getActorIdentifier',
] as const;

// decorated symbols
const symbols2 = [
    'sprintf',
    'vsnprintf',
    '??$_Allocate@$0BA@U_Default_allocate_traits@std@@$0A@@std@@YAPEAX_K@Z',
    '?ToString@SystemAddress@RakNet@@QEBAX_NPEADD@Z',
    '??0?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@QEAA@XZ',
    '??_7ServerInstance@@6BEnableNonOwnerReferences@Bedrock@@@',
    '??_7NetworkHandler@@6BIGameConnectionInfoProvider@Social@@@',
    '??_7ServerNetworkHandler@@6BNetEventCallback@@@',
    '??_7RakNetInstance@@6BConnector@@@',
    '??_7RakPeer@RakNet@@6BRakPeerInterface@1@@',
    '??AValue@Json@@QEAAAEAV01@H@Z',
    '??AValue@Json@@QEAAAEAV01@PEBD@Z',
    '??0Value@Json@@QEAA@W4ValueType@1@@Z',
    '??0Value@Json@@QEAA@AEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Z',
    '??$getline@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@YAAEAV?$basic_istream@DU?$char_traits@D@std@@@0@$$QEAV10@AEAV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@0@D@Z',
    '??_7MinecraftServerScriptEngine@@6BScriptFramework@ScriptApi@@@',
    '??_7MinecraftServerScriptEngine@@6B@',
    '?computeHash@HashedString@@SA_KAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Z',
    '?getMutableInstance@BaseAttributeMap@@QEAAPEAVAttributeInstance@@I@Z',
    '?_spawnMovingBlocks@PistonBlockActor@@AEAAXAEAVBlockSource@@@Z',
    '??_7OverworldDimension@@6BLevelListener@@@',
    '??_7ServerLevel@@6BILevel@@@',
    '??0CommandOutput@@QEAA@W4CommandOutputType@@@Z',
    '?explode@Level@@UEAAXAEAVBlockSource@@PEAVActor@@AEBVVec3@@M_N3M3@Z',
    '??0MobEffectInstance@@QEAA@IHH_N00@Z',
    '?addEffect@Actor@@QEAAXAEBVMobEffectInstance@@@Z',
    '?removeEffect@Actor@@QEAAXH@Z',
    '?getScoreboardId@Scoreboard@@QEBAAEBUScoreboardId@@AEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Z',
    '?getScoreboardId@Scoreboard@@QEBAAEBUScoreboardId@@AEBVActor@@@Z',
    '?getScoreboardId@Scoreboard@@QEBAAEBUScoreboardId@@AEBVPlayer@@@Z',
    '?resetPlayerScore@Scoreboard@@QEAAXAEBUScoreboardId@@AEAVObjective@@@Z',
    '?setBlock@BlockSource@@QEAA_NHHHAEBVBlock@@H@Z',
    '??0PlayerListEntry@@QEAA@AEBVPlayer@@@Z',
    '?applyEnchant@EnchantUtils@@SA_NAEAVItemStackBase@@W4Type@Enchant@@H_N@Z',
    '??0ActorDefinitionIdentifier@@QEAA@W4ActorType@@@Z',
    '?success@CommandOutput@@QEAAXXZ',
    '?success@CommandOutput@@QEAAXAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBV?$vector@VCommandOutputParameter@@V?$allocator@VCommandOutputParameter@@@std@@@3@@Z',
    '?error@CommandOutput@@QEAAXAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBV?$vector@VCommandOutputParameter@@V?$allocator@VCommandOutputParameter@@@std@@@3@@Z',
    '??0ByteTag@@QEAA@E@Z',
    '??0ShortTag@@QEAA@F@Z',
    '??0IntTag@@QEAA@H@Z',
    '??0Int64Tag@@QEAA@XZ',
    '??0FloatTag@@QEAA@M@Z',
    '??0DoubleTag@@QEAA@XZ',
    '??0ByteArrayTag@@QEAA@UTagMemoryChunk@@@Z',
    '??0StringTag@@QEAA@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Z',
    '??0ListTag@@QEAA@XZ',
    '??0CompoundTag@@QEAA@XZ',
    '??0IntArrayTag@@QEAA@XZ',
    '?put@CompoundTag@@QEAAAEAVTag@@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@$$QEAV2@@Z',
    '?fromTag@ItemStack@@SA?AV1@AEBVCompoundTag@@@Z',
    'sprintf',
    'vsnprintf',
    '?getBlockEntity@BlockSource@@QEAAPEAVBlockActor@@AEBVBlockPos@@@Z',
    '?tryLightFire@CampfireBlock@@SA_NAEAVBlockSource@@AEBVBlockPos@@@Z',
    '?tryDouseFire@CampfireBlock@@SA_NAEAVBlockSource@@AEBVBlockPos@@_N@Z',
    '?setStatusFlag@Actor@@QEAA_NW4ActorFlags@@_N@Z',
    '?sameItem@ItemStackBase@@QEBA_NAEBV1@@Z',
    '??0UpdateBlockPacket@@QEAA@AEBVBlockPos@@IIE@Z',
    '?GetAveragePing@RakPeer@RakNet@@UEAAHUAddressOrGUID@2@@Z',
    '?GetLastPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z',
    '?GetLowestPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z'
] as const;


export const proc = pdb.getList(pdb.coreCachePath, {}, symbols, false, UNDNAME_NAME_ONLY);
export const proc2 = pdb.getList(pdb.coreCachePath, {}, symbols2);

pdb.close();
